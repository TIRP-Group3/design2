
from flask import Blueprint, jsonify, request
from models import User
from database import db
from flask_jwt_extended import jwt_required, get_jwt_identity

user_bp = Blueprint('user', __name__)

@user_bp.route('/', methods=['GET'])
@jwt_required()
def get_users():
    current_user_id = int(get_jwt_identity())
    current_user = User.query.get(current_user_id)
    if current_user['role'] != 'admin':
        return jsonify({'msg': 'Unauthorized'}), 403

    users = User.query.all()
    return jsonify([{
        'id': u.id,
        'name': u.name,
        'email': u.email,
        'role': u.role,
        'status': u.status
    } for u in users])

@user_bp.route('/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    current_user_id = int(get_jwt_identity())
    current_user = User.query.get(current_user_id)
    if current_user['role'] != 'admin':
        return jsonify({'msg': 'Unauthorized'}), 403

    user = User.query.get(user_id)
    if not user:
        return jsonify({'msg': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'msg': 'User deleted'})
