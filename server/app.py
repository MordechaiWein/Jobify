from flask import jsonify, request, session, render_template
from sqlalchemy.exc import IntegrityError
from flask_restful import Resource
from config import app, db, api, bcrypt
from models import db, User, Job, Responsibility, Qualification

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

class Users(Resource):

    def get(self):

        users = [user.to_dict() for user in User.query.all()]
        return users, 200

class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')
        password_confirmation = request_json.get('password_confirmation')
        email_address = request_json.get('email_address')
        
        user = User(
            username=username,
            email = email_address,
            admin = False
        )
        
        validation_errors = {}
 
        try:
            if not username:
                validation_errors['username'] = 'A username is required'
            if not password:
                validation_errors['password'] = 'A password is required'
            if password and not password_confirmation:
                validation_errors['password'] = 'password confirmation is required'
            if password and password_confirmation:
                if password != password_confirmation:
                    validation_errors['password'] = 'Password does not match password confirmation'
            if not email_address:
                validation_errors['email_address'] = 'An email address is required'
            if len(username) > 1:
                users = User.query.filter(User.username == username).all()
                if users:
                    validation_errors['username'] = ' The username already exists'
          
            if validation_errors:
                return {'errors': validation_errors}, 422

            user.password_hash = password
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict(), 201
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422

api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Users, '/users', endpoint='users')


if __name__ == "__main__":
    app.run(port=8000, debug=True)
