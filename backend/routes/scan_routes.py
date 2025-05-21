# routes/scan_routes.py
import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from flask_jwt_extended import jwt_required, get_jwt_identity

from models import ScanResult
from database import db
from services.prediction_service import predict_with_model
import pandas as pd
import uuid
from datetime import datetime, timedelta
from sqlalchemy import func, desc
scan_bp = Blueprint('scan', __name__)
UPLOAD_FOLDER = 'uploads/scan_files'

@scan_bp.route('/upload', methods=['POST'])
@jwt_required()
def upload_and_scan():
    if 'file' not in request.files:
        return jsonify({'msg': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'msg': 'No file selected'}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath)
        predictions = predict_with_model(filepath)
        user_id = int(get_jwt_identity())

        batch_id = str(uuid.uuid4())
        results = []
        for i, prediction in enumerate(predictions):
            row_filename = df.iloc[i]['file_name'] if 'file_name' in df.columns else f"{filename} [row {i}]"
            scan = ScanResult(
                filename=row_filename,
                filetype=row_filename.split('.')[-1],
                result=prediction['label'],
                threat_type=prediction['threat_type'],
                user_id=user_id,
                location=filepath,
                batch_id=batch_id,
                status="Quarantine or delete" if prediction['label'] == "Malicious" else "Safe to keep"
            )
            db.session.add(scan)
            results.append({
                'filename': scan.filename,
                'result': scan.result,
                'threat_type': scan.threat_type,
                'confidence': prediction['confidence'],
                'status': scan.status,
            })

        db.session.commit()
        return jsonify({
            "batch_id": batch_id,
            "results": results
        }), 200

    except Exception as e:
        return jsonify({'msg': f'Prediction failed: {str(e)}'}), 500

@scan_bp.route('/history', methods=['GET'])
@jwt_required()
def get_scan_history():
    user_id = get_jwt_identity()
    scans = ScanResult.query.filter_by(user_id=user_id).order_by(ScanResult.id.desc()).all()
    return jsonify([
        {
            'filename': s.filename,
            'threat_type': s.threat_type,
            'result': s.result,
            'confidence': s.confidence,
            'status': s.status,
            'uploaded_at': s.uploaded_at.strftime('%Y-%m-%d')
        }
        for s in scans
    ])

@scan_bp.route('/scan-results', methods=['GET'])
@jwt_required()
def get_all_scan_results():
    scans = ScanResult.query.order_by(ScanResult.id.desc()).all()

    return jsonify([
        {
            "id": s.id,
            "filename": s.filename,
            "filetype": s.filetype,
            "result": s.result,
            "threat_type": s.threat_type,
            "scanned_at": s.scanned_at.strftime('%Y-%m-%d %H:%M:%S') if s.scanned_at else None,
            "user_id": s.user_id,
            "location": s.location,
            "status": s.status,
            "batch_id": s.batch_id
        }
        for s in scans
    ])


@scan_bp.route('/dashboard-summary', methods=['GET'])
def dashboard_summary():
    # Total scans
    total = ScanResult.query.count()

    # Clean and malware
    clean = ScanResult.query.filter_by(result='Clean').count()
    malware = total - clean
    rate = (malware / total) * 100 if total else 0

    # Top 4 threat types (by threat_type)
    threat_counts = (
        ScanResult.query
        .with_entities(ScanResult.threat_type, func.count().label("count"))
        .filter(ScanResult.result != 'Clean')
        .group_by(ScanResult.threat_type)
        .order_by(desc("count"))
        .limit(4)
        .all()
    )

    top_threats = [
        {"threat": t.threat_type or "Unknown", "count": t.count}
        for t in threat_counts
    ]

    # Recent 5 scans
    recent = (
        ScanResult.query
        .order_by(ScanResult.scanned_at.desc())
        .limit(5)
        .all()
    )

    recent_data = [
        {
            "filename": s.filename,
            "threat_type": s.threat_type,
            "result": s.result,
            "scanned_at": s.scanned_at.isoformat()
        }
        for s in recent
    ]

    return jsonify({
        "total": total,
        "clean": clean,
        "malware": malware,
        "rate": round(rate, 2),
        "topThreats": top_threats,
        "recent": recent_data
    })

@scan_bp.route('/upload-public', methods=['POST'])
def upload_and_scan_public():
    if 'file' not in request.files:
        return jsonify({'msg': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'msg': 'No file selected'}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath)
        predictions = predict_with_model(filepath)
        
        user_id = 2  # <--- fixed guest user ID

        batch_id = str(uuid.uuid4())
        results = []
        for i, prediction in enumerate(predictions):
            row_filename = df.iloc[i]['file_name'] if 'file_name' in df.columns else f"{filename} [row {i}]"
            scan = ScanResult(
                filename=row_filename,
                filetype=row_filename.split('.')[-1],
                result=prediction['label'],
                threat_type=prediction['threat_type'],
                user_id=user_id,
                location=filepath,
                batch_id=batch_id,
                status="Quarantine or delete" if prediction['label'] == "Malicious" else "Safe to keep"
            )
            db.session.add(scan)
            results.append({
                'filename': scan.filename,
                'result': scan.result,
                'threat_type': scan.threat_type,
                'confidence': prediction['confidence'],
                'status': scan.status,
            })

        db.session.commit()
        return jsonify({
            "batch_id": batch_id,
            "results": results
        }), 200

    except Exception as e:
        return jsonify({'msg': f'Prediction failed: {str(e)}'}), 500
