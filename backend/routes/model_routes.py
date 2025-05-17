from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.utils import secure_filename
import os
import pandas as pd
from models import TrainingSession
from database import db
from services.training_service import train_hybrid_model
from datetime import datetime

model_bp = Blueprint('model', __name__) 
UPLOAD_FOLDER = "uploads/datasets"

@model_bp.route('/train', methods=['POST'])  
@jwt_required()
def train_model_route():
    if 'file' not in request.files:
        return jsonify({'msg': 'No file uploaded'}), 400

    file = request.files['file']
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath) if filename.endswith('.csv') else pd.read_excel(filepath)
        num_rows = df.shape[0]
        numeric = df.select_dtypes(include='number').shape[1]
        categorical = df.select_dtypes(include='object').shape[1]
        datetime_cols = df.select_dtypes(include='datetime').shape[1]
        completeness = f"{100 - df.isnull().mean().mean() * 100:.1f}%"

        user_id = int(get_jwt_identity())
        accuracy, model_path = train_hybrid_model(filepath, user_id)

        # Save training session
        session = TrainingSession(
            filename=filename,
            model_path=model_path,
            accuracy=accuracy,
            uploaded_by=user_id
        )
        db.session.add(session)
        db.session.commit()

        return jsonify({
            "msg": "Training complete",
            "filename": filename,
            "rows": num_rows,
            "columns": {
                "numeric": numeric,
                "categorical": categorical,
                "datetime": datetime_cols
            },
            "completeness": completeness,
            "accuracy": round(accuracy, 2),
            "model_path": model_path
        }), 200

    except Exception as e:
        return jsonify({'msg': f'Training failed: {str(e)}'}), 500


@model_bp.route('/history', methods=['GET'])
@jwt_required()
def get_training_history():
    sessions = TrainingSession.query.order_by(TrainingSession.uploaded_at.desc()).all()

    result = []
    for s in sessions:
        result.append({
            'id': s.id,
            'filename': s.filename,
            'accuracy': round(s.accuracy, 2),
            'model_path': s.model_path,
            'uploaded_by': s.uploaded_by,
            'uploaded_at': s.uploaded_at.strftime('%Y-%m-%d %H:%M:%S'),
        })

    return jsonify(result), 200
