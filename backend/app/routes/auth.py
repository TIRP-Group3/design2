from flask import Blueprint, request, jsonify
from app.controllers.auth_controller import login, register

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login_route():
    return login(request)

@auth_bp.route('/register', methods=['POST'])
def register_route():
    return register(request)
