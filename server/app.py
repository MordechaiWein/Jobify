from flask import jsonify, request, session, render_template, redirect
from sqlalchemy.exc import IntegrityError
from flask_restful import Resource
from config import app, db, api, bcrypt
from datetime import datetime
from models import db, User, Job, Responsibility, Qualification, user_job_join

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

class Me(Resource):

    def get(self):
        user = User.query.filter(User.id == session['user_id']).first()
        if request.headers.get('Accept') == 'application/json':
            if user:
                return user.to_dict(), 200
            else:
                return {'error': "Unauthorized"}, 401
        else:
            return redirect('https://jobify-o1zz.onrender.com/notfound')  

class Logout(Resource):

    def delete(self):

        if session.get('user_id'):
            session['user_id'] = None
            return {}, 204
        return {'error': '401 Unauthorized'}, 401


class Login(Resource):

    def post(self):
        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return user.to_dict(), 200

        return {'error': ["Invalid username or password."]}, 401

class Signup(Resource):
    
    def post(self):

        request_json = request.get_json()

        username = request_json.get('username')
        password = request_json.get('password')
        password_confirmation = request_json.get('password_confirmation')
        email_address = request_json.get('email_address')
        
        user = User(
            username = username,
            email = email_address,
            admin = True
        )
        
        validation_errors = {}
 
        try:
            if not username:
                validation_errors['username'] = 'A username is required.'
            if username:
                if len(username) < 2:
                    validation_errors['username'] = 'Please enter a valid username.'
            if not password:
                validation_errors['password'] = 'A password is required.'
            if password and not password_confirmation:
                validation_errors['password'] = 'password confirmation is required.'
            if password and password_confirmation:
                if password != password_confirmation:
                    validation_errors['password'] = 'Password does not match password confirmation.'
                elif len(password) < 8:
                    validation_errors['password'] = 'Password must be at least 8 characters.'
            if not email_address:
                validation_errors['email_address'] = 'An email address is required.'
            if len(username) > 1:
                users = User.query.filter(User.username == username).all()
                if users:
                    validation_errors['username'] = ' The username already exists.'
          
            if validation_errors:
                return {'errors': validation_errors}, 422

            user.password_hash = password
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return user.to_dict(), 201
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422

class Jobs(Resource):

    def get(self):
        if request.headers.get('Accept') == 'application/json':
            jobs = [job.to_dict() for job in Job.query.all()]  
            return jobs, 200
        else:
            return redirect('https://jobify-o1zz.onrender.com/notfound')  

    def post(self):

        request_json = request.get_json()
        
        company_name = request_json.get('company_name')
        title = request_json.get('title')
        job_description = request_json.get('job_description')
        job_type =  request_json.get('job_type')
        industry = request_json.get('industry')
        remote = request_json.get('remote')
        salary = request_json.get('salary')
        location = request_json.get('location')
        longitude = request_json.get('longitude')
        latitude =  request_json.get('latitude') 

        job = Job(
            company_name = company_name,
            title = title,
            job_description = job_description,
            job_type =  job_type,
            industry = industry,
            remote = remote,
            salary = salary,
            location = location,
            longitude = longitude,
            latitude =  latitude
        )
        
        validation_errors = {}
        try:
            if not company_name:
                validation_errors['company_name'] = 'A company name is a required field.'
            if not title:
                validation_errors['title'] = 'A title is a required field.'
            if not job_description:
                validation_errors['job_description'] = 'A job description is a required field.'
            if not job_type:
                validation_errors['job_type'] = 'A job type is a required field.'
            if not industry:
                validation_errors['industry'] = 'An industry is a required field.'
            if remote != True and remote != False:
                validation_errors['remote'] = 'You must pick an option. Please choose yes or no.'
            if not salary:
                validation_errors['salary'] = 'A salary is a required field.'
            if not location:
                validation_errors['location'] = 'A location is a required field.'
            if not longitude:
                validation_errors['longitude'] = 'Please enter a longitude.'
            if not latitude:
                validation_errors['latitude'] = 'Please enter a latitude.'
            if len(title) > 1:
                jobs = Job.query.filter(Job.title == title).all()
                if jobs:
                    validation_errors['title'] = ' That job already exists.'
            if job_description:
                if len(job_description) < 100:
                    validation_errors['job_description'] = 'Job description must be at least 100 characters.'
          
          
            if validation_errors:
                return {'errors': validation_errors}, 422

            db.session.add(job)
            db.session.commit()

            formatted_created_at = job.created_at.strftime("%B %d, %Y")
            
            job_dict = {
                "id": job.id,
                "company_name": job.company_name,
                "title": job.title,
                "job_description": job.job_description,
                "job_type": job.job_type,
                "industry": job.industry,
                "remote": job.remote,
                "salary": job.salary,
                "location": job.location,
                "longitude": job.longitude,
                "latitude": job.latitude,
                "created_at": formatted_created_at
            }

            return job_dict, 201
            
        except IntegrityError:
            return {'error': '422 Unprocessable Entity'}, 422

class JobByID(Resource):
    
    def delete(self, id):
        job = Job.query.filter(Job.id == id).first()
        if job.created_at > datetime(2023, 9, 15):
            db.session.delete(job)
            db.session.commit()
            return job.to_dict()
        else:
            return {"message": 
                '''Thank you for using our website. You are free to explore and 
                interact with all functionality for any job you add to Jobify. 
                However, please note that this particular job cannot be deleted.'''
            }, 400

       

    def patch(self, id):
        job = Job.query.filter(Job.id == id).first()

        if job.created_at > datetime(2023, 9, 15):
            
            request_json = request.get_json()
            for attr in request_json:
                setattr(job, attr, request_json[attr])
                
            validation_errors = {}
            
            try:
                if not job.company_name:
                    validation_errors['company_name'] = 'A company name is a required field.'
                if not job.title:
                    validation_errors['title'] = 'A title is a required field.'
                if not job.job_description:
                    validation_errors['job_description'] = 'A job description is a required field.'
                if not job.job_type:
                    validation_errors['job_type'] = 'A job type is a required field.'
                if not job.industry:
                    validation_errors['industry'] = 'An industry is a required field.'
                if job.remote != True and job.remote != False:
                    validation_errors['remote'] = 'You must pick an option. Please choose yes or no.'
                if not job.salary:
                    validation_errors['salary'] = 'A salary is a required field.'
                if not job.location:
                    validation_errors['location'] = 'A location is a required field.'
                if not job.longitude:
                    validation_errors['longitude'] = 'Please enter a longitude.'
                if not job.latitude:
                    validation_errors['latitude'] = 'Please enter a latitude.'
                if job.job_description:
                    if len(job.job_description) < 100:
                        validation_errors['job_description'] = 'Job description must be at least 100 characters.'
            
                if validation_errors:
                    return {'errors': validation_errors}, 422

                db.session.add(job)
                db.session.commit()
                
                formatted_created_at = job.created_at.strftime("%B %d, %Y")
                
                job_dict = {
                    "id": job.id,
                    "company_name": job.company_name,
                    "title": job.title,
                    "job_description": job.job_description,
                    "job_type": job.job_type,
                    "industry": job.industry,
                    "remote": job.remote,
                    "salary": job.salary,
                    "location": job.location,
                    "longitude": job.longitude,
                    "latitude": job.latitude,
                    "created_at": formatted_created_at
                }

                return job_dict, 201
                
            except IntegrityError:
                return {'error': '422 Unprocessable Entity'}, 422
        else:
            return {"message": 
                '''Thank you for using our website. You are free to explore and 
                interact with all functionality for any job you add to Jobify. 
                However, please note that this particular job cannot be edited.'''
            }, 400


class UserJobJoins(Resource):

    def post(self):

        request_json = request.get_json()

        user_id = request_json.get('user_id'),
        job_id = request_json.get('job_id')

        job = Job.query.filter(Job.id == job_id).first()

        try:
            user_and_job_connected = user_job_join.insert().values(
                user_id = user_id,
                job_id = job_id
            )
            db.session.execute(user_and_job_connected)
            db.session.commit()
            
            return job.to_dict(), 201
                   
        except IntegrityError:
            return {'error': 'You have already saved this job to your board.'}, 422

class UserAndJobsByID(Resource):

    def delete(self, id):
        
        user_id = session.get('user_id')
        job = Job.query.filter(Job.id == id).first()

        delete_statement = user_job_join.delete().where(
            (user_job_join.c.user_id == user_id) & (user_job_join.c.job_id == id)
        )

        db.session.execute(delete_statement)
        db.session.commit()

        return job.to_dict(), 200

class Responsibilities(Resource):

    def post(self):
        
        request_json = request.get_json()
        
        obligation = request_json.get('obligation')
        job_id = request_json.get('job_id')
        
        responsibility = Responsibility(
            obligation = obligation,
            job_id = job_id
        )

        validation_errors = {}
        try:
            if not obligation:
                validation_errors['error'] = 'Please submit a responsibility.'
            if obligation:
                if len(obligation) < 25:
                    validation_errors['error'] = 'Responsibility must be at least 25 characters.'
                elif len(obligation) >= 25:
                    responsibilities = Responsibility.query.filter(Responsibility.obligation == obligation, Responsibility.job_id == job_id).all()
                    if responsibilities:
                        validation_errors['error'] = ' That Responsibility already exists.'

            if validation_errors:
                return validation_errors, 422

            db.session.add(responsibility)
            db.session.commit()

            return responsibility.to_dict(), 201
        except IntegrityError:
            return {'error': 'Responsibilities error'}, 422


class Qualifications(Resource):

    def post(self):

        request_json = request.get_json()

        prerequisite = request_json.get('prerequisite')
        job_id = request_json.get('job_id')
        
        qualification = Qualification(
            prerequisite = prerequisite,
            job_id = job_id
        )

        validation_errors = {}
        try:
            if not prerequisite:
                validation_errors['error'] = 'Please submit a requirement.'
            if prerequisite:
                if len(prerequisite) < 25:
                    validation_errors['error'] = 'Requirement must be at least 25 characters.'
                elif len(prerequisite) >= 25:
                    qualifications = Qualification.query.filter(Qualification.prerequisite == prerequisite, Qualification.job_id == job_id).all()
                    if qualifications:
                        validation_errors['error'] = 'That Requirement already exists.'

            if validation_errors:
                return validation_errors, 422
                
            db.session.add(qualification)
            db.session.commit()

            return qualification.to_dict(), 201

        except IntegrityError:
            return {'error': 'Qualifications error'}, 422

class ResponsibilityByID(Resource):
    def delete(self, id): 

        responsibility = Responsibility.query.filter(Responsibility.id == id).first()

        job = Job.query.filter(Job.id == responsibility.job_id).first()
        
        if job.created_at > datetime(2023, 9, 15):
            
            db.session.delete(responsibility)
            db.session.commit()
            return responsibility.to_dict()

        else: 
            return {"note": 'You are free to interact with all functionality for any job you add to Jobify. However, this responsibility cannot be deleted.'}, 400



class  QualificationByID(Resource):
    def delete(self, id):
        
        qualification = Qualification.query.filter(Qualification.id == id).first()

        job = Job.query.filter(Job.id == qualification.job_id).first()

        if job.created_at > datetime(2023, 9, 15):
            
            db.session.delete(qualification)
            db.session.commit()
            return qualification.to_dict()

        else: 
            return {"note": 'You are free to interact with all functionality for any job you add to Jobify. However, this qualification cannot be deleted.'}, 400



api.add_resource(ResponsibilityByID, '/responsibilities/<int:id>', endpoint='responsibilityByID')       
api.add_resource(QualificationByID, '/qualifications/<int:id>', endpoint='qualificationByID')
api.add_resource(Qualifications, '/qualifications', endpoint='qualifications')
api.add_resource(Responsibilities, '/responsibilities', endpoint='responsibilities')      
api.add_resource(UserAndJobsByID, '/userjobsjoin/<int:id>', endpoint='UserAndJobsByID')
api.add_resource(UserJobJoins, '/userjobsjoin', endpoint='UserJobJoins')
api.add_resource(JobByID, '/jobs/<int:id>', endpoint='jobByID')
api.add_resource(Jobs, '/jobs', endpoint='jobs')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(Me, '/me', endpoint='me')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == "__main__":
    app.run(port=8000, debug=True)
