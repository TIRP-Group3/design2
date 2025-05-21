from flask import Blueprint, jsonify, request
from models import User
from database import db
from flask_jwt_extended import jwt_required, get_jwt_identity

user_bp = Blueprint('user', __name__)

@user_bp.route('/', methods=['GET'])
@jwt_required()
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': u.id,
        'name': u.name,
        'email': u.email,
        'role': u.role,
        'status': u.status
    } for u in users])

@user_bp.route('/', methods=['POST'])
@jwt_required()
def create_user():
    data = request.json
    if not data.get('email') or not data.get('name') or not data.get('password'):
        return jsonify({'msg': 'Name, email, and password are required'}), 400

    if User.query.filter_by(email=data['email']).first():
        return jsonify({'msg': 'Email already exists'}), 409

    new_user = User(
        name=data['name'],
        email=data['email'],
        password=data['password'],  # In production, hash this
        role=data.get('role', 'client'),
        status=data.get('status', 'active')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'msg': 'User created', 'id': new_user.id}), 201

@user_bp.route('/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.json

    if 'email' in data and data['email'] != user.email:
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'msg': 'Email already exists'}), 409
        user.email = data['email']

    user.name = data.get('name', user.name)
    user.role = data.get('role', user.role)
    user.status = data.get('status', user.status)

    db.session.commit()
    return jsonify({'msg': 'User updated'})

@user_bp.route('/<int:user_id>', methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'msg': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'msg': 'User deleted'})
