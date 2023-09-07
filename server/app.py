from flask import jsonify, request, session, render_template
from flask_restful import Resource
from config import app, db, api, bcrypt
from models import db, User, Job, Responsibility, Qualification

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

class Jobs(Resource):

    def get(self):
        jobs = [job.to_dict() for job in Job.query.all()]
        return jobs, 200

api.add_resource(Jobs, '/jobs')


if __name__ == "__main__":
    app.run(port=8000, debug=True)
