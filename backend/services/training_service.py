import os
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Embedding, LSTM, Conv1D, GlobalMaxPooling1D, Dense, Concatenate
)
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.callbacks import EarlyStopping
from database import db
from models import TrainingSession
import joblib

def train_hybrid_model(file_path, user_id):
    df = pd.read_csv(file_path)

    if 'target' not in df.columns:
        raise ValueError("Dataset must include a 'target' column.")

    # Split features and labels
    X = df.drop('target', axis=1)
    y = df['target']

    # Encode labels
    le_target = LabelEncoder()
    y_encoded = le_target.fit_transform(y)
    y_cat = to_categorical(y_encoded)

    # Encode categorical columns if any
    label_encoders = {}
    for col in X.select_dtypes(include='object'):
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        label_encoders[col] = le

    # Pad/reshape input
    maxlen = 100
    X_pad = pad_sequences(X.values, maxlen=maxlen)

    # Split into training and testing
    X_train, X_test, y_train, y_test = train_test_split(X_pad, y_cat, test_size=0.2, random_state=42)

    # Define hybrid LSTM + CNN model
    input_layer = Input(shape=(maxlen,))
    embed = Embedding(input_dim=np.max(X_pad) + 1, output_dim=64)(input_layer)

    # LSTM branch
    x1 = LSTM(64)(embed)

    # CNN branch
    x2 = Conv1D(64, kernel_size=3, activation='relu')(embed)
    x2 = GlobalMaxPooling1D()(x2)

    # Merge branches
    x = Concatenate()([x1, x2])
    x = Dense(64, activation='relu')(x)
    output = Dense(y_cat.shape[1], activation='softmax')(x)

    model = Model(inputs=input_layer, outputs=output)
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    # Train model
    model.fit(X_train, y_train, epochs=10, batch_size=32, validation_split=0.2,
              callbacks=[EarlyStopping(patience=2)], verbose=1)

    # Evaluate
    _, acc = model.evaluate(X_test, y_test, verbose=0)
    acc_percent = float(acc) * 100

    # Save model and encoders
    os.makedirs("models", exist_ok=True)
    model_path = f"models/lstm_cnn_model.h5"
    enc_path = f"models/label_encoders.pkl"

    model.save(model_path)
    joblib.dump({'target': le_target, **label_encoders}, enc_path)

    # Record training session in DB
    session = TrainingSession(
        filename=os.path.basename(file_path),
        model_path=model_path,
        accuracy=acc_percent,
        uploaded_by=user_id
    )
    db.session.add(session)
    db.session.commit()

    return acc_percent, model_path

def preprocess_data(df):
    if 'sequence' in df.columns:
        # You can later add tokenizer code here
        pass
    else:
        # Current method
        X = df.drop('target', axis=1)
        y = df['target']
        return X, y