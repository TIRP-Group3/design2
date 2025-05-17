
import os
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from datetime import datetime
from flask_jwt_extended import jwt_required, get_jwt_identity

from models import ScanResult
from database import db

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
    file.save(filepath)

    result, threat_type = predict_malware(filepath)

    user_id = int(get_jwt_identity())
    scan = ScanResult(
        filename=filename,
        filetype=filename.split('.')[-1],
        result=result,
        threat_type=threat_type,
        user_id=user_id,
        location=filepath,
        status="Quarantined" if result == "Malicious" else "Resolved"
    )
    db.session.add(scan)
    db.session.commit()

    return jsonify({
        'filename': filename,
        'result': result,
        'threat_type': threat_type,
        'status': scan.status
    }), 200

def predict_malware(filepath):
    if filepath.endswith('.exe'):
        return "Malicious", "Trojan"
    elif filepath.endswith('.js'):
        return "Suspicious", "Script"
    else:
        return "Clean", "None"
