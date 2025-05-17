
import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from flask_jwt_extended import jwt_required, get_jwt_identity
import pandas as pd
from models import Dataset
from database import db
from datetime import datetime

dataset_bp = Blueprint('dataset', __name__)
UPLOAD_FOLDER = 'uploads/datasets'

@dataset_bp.route('/upload', methods=['POST'])
@jwt_required()
def upload_dataset():
    if 'file' not in request.files:
        return jsonify({'msg': 'No file uploaded'}), 400

    file = request.files['file']
    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath) if filename.endswith('.csv') else pd.read_excel(filepath)
        num_rows = df.shape[0]
        size = f"{os.path.getsize(filepath) / (1024 * 1024):.1f} MB"
        numeric = df.select_dtypes(include='number').shape[1]
        categorical = df.select_dtypes(include='object').shape[1]
        datetime_cols = df.select_dtypes(include='datetime').shape[1]
        completeness = f"{100 - df.isnull().mean().mean() * 100:.1f}%"
        consistency = "98%"

        dataset = Dataset(
            filename=filename,
            size=size,
            uploaded_by=int(get_jwt_identity()),
            status='Uploaded',
            column_types=f"Numeric: {numeric}, Categorical: {categorical}, DateTime: {datetime_cols}",
            completeness=completeness,
            consistency=consistency
        )
        db.session.add(dataset)
        db.session.commit()

        return jsonify({
            'msg': 'Dataset uploaded successfully',
            'filename': filename,
            'rows': num_rows,
            'size': size,
            'columns': {
                'numeric': numeric,
                'categorical': categorical,
                'datetime': datetime_cols
            },
            'completeness': completeness,
            'consistency': consistency
        }), 200

    except Exception as e:
        return jsonify({'msg': f'Failed to process dataset: {str(e)}'}), 500
