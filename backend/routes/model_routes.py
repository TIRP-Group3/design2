from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.training_service import train_hybrid_model
import os

model_bp = Blueprint('model', __name__)
DATASET_FOLDER = "uploads/datasets"

@model_bp.route('/train', methods=['POST'])
@jwt_required()
def train_model_route():
    data = request.get_json()
    filename = data.get('filename')

    if not filename:
        return jsonify({"msg": "Dataset filename is required"}), 400

    file_path = os.path.join(DATASET_FOLDER, filename)

    if not os.path.exists(file_path):
        return jsonify({"msg": f"File '{filename}' not found"}), 404

    user_id = int(get_jwt_identity())

    try:
        accuracy, model_path = train_hybrid_model(file_path, user_id)
        return jsonify({
            "msg": "Model trained successfully",
            "accuracy": round(accuracy, 2),
            "model_path": model_path
        }), 200

    except Exception as e:
        return jsonify({"msg": f"Training failed: {str(e)}"}), 500
