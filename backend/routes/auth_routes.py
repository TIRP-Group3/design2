
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from models import User
from database import db
from datetime import timedelta

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    name = data.get('name')
    password = data.get('password')
    role = data.get('role', 'client')

    if not email or not name or not password:
        return jsonify({'msg': 'Missing required fields'}), 400
    email = email.lower().strip()
    if User.query.filter_by(email=email).first():
        return jsonify({'msg': 'User already exists'}), 400

    hashed_pw = generate_password_hash(password)
    user = User(email=email, name=name, password=hashed_pw, role=role)
    db.session.add(user)
    db.session.commit()

    return jsonify({'msg': 'Registration successful'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({'msg': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(days=365 * 100))

    return jsonify(
        token=access_token,
        user={
            "email": user.email,
            "name": user.name,
            "role": user.role
        }
    ), 200
