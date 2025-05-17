# services/prediction_service.py
import numpy as np
import pandas as pd
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import joblib
import os

ENCODER_PATH = 'models/label_encoders.pkl'
MODEL_PATH = 'models/lstm_cnn_model.h5'

# Feature extraction — assumes CSV input with multiple rows

def extract_features(filepath):
    try:
        df = pd.read_csv(filepath)
        if 'target' in df.columns:
            df = df.drop('target', axis=1)
        return df
    except Exception as e:
        raise ValueError(f"Failed to extract features: {e}")

def predict_with_model(filepath):
    try:
        if not os.path.exists(MODEL_PATH):
            raise FileNotFoundError("Trained model not found.")
        if not os.path.exists(ENCODER_PATH):
            raise FileNotFoundError("Encoders not found.")

        # Load model and encoders
        model = load_model(MODEL_PATH)
        encoders = joblib.load(ENCODER_PATH)
        le_target = encoders['target']

        df = extract_features(filepath)

        # Apply encoders for categorical features
        for col in df.columns:
            if col in encoders and hasattr(encoders[col], 'transform'):
                df[col] = encoders[col].transform(df[col])

        maxlen = 100
        X_pad = pad_sequences(df.values, maxlen=maxlen)

        preds = model.predict(X_pad)
        class_indices = np.argmax(preds, axis=1)
        labels = le_target.inverse_transform(class_indices)
        confidences = np.max(preds, axis=1)

        results = []
        for i in range(len(df)):
            label = labels[i]
            results.append({
                'index': i,
                'label': "Malicious" if label.lower() != "benign" else "Clean",
                'threat_type': label,
                'confidence': float(confidences[i])
            })

        return results

    except Exception as e:
        raise RuntimeError(f"Prediction error: {e}")