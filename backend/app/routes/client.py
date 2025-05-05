from flask import Blueprint, request, jsonify
from app.controllers.client_controller import dashboard

client_bp = Blueprint('client', __name__)

@client_bp.route('/dashboard', methods=['GET'])
def dashboard_route():
    return dashboard(request)
