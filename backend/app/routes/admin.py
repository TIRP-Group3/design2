from flask import Blueprint, request, jsonify
from app.controllers.admin_controller import dashboard

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/dashboard', methods=['GET'])
def dashboard_route():
    return dashboard(request)
