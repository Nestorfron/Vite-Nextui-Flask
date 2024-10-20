"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from .models import db, User
from .utils import generate_sitemap, APIException
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt, JWTManager

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

#####################   USERS SECTION    ########################################

@api.route('/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello World"}), 200


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({"users": users.serialize()}), 200