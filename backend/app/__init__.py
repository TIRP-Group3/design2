from flask import Flask

def create_app():
    app = Flask(__name__)

    from .routes.auth import auth_bp
    from .routes.admin import admin_bp
    from .routes.client import client_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')
    app.register_blueprint(client_bp, url_prefix='/api/client')

    return app
