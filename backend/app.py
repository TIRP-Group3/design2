
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from database import db
from routes.auth_routes import auth_bp
from routes.scan_routes import scan_bp
from routes.user_routes import user_bp
from routes.dataset_routes import dataset_bp
from routes.model_routes import model_bp
def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    CORS(app, supports_credentials=True, origins=["*"])
    JWTManager(app)

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(scan_bp, url_prefix='/api/scan')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(dataset_bp, url_prefix='/api/datasets')
    app.register_blueprint(model_bp, url_prefix='/api/model')
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
