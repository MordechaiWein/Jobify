from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import func
from config import db, bcrypt

user_job_join = db.Table(
    "user_job_joins",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("job_id", db.Integer, db.ForeignKey("jobs.id")),
    db.UniqueConstraint("user_id", "job_id", name="unique_user_job"),
    extend_existing=True,
)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    _password_hash = db.Column(db.String)
    email = db.Column(db.String)
    admin = db.Column(db.Boolean, default=False)

    jobs = db.relationship('Job', secondary= user_job_join, back_populates='users')
   
    serialize_rules = ('-jobs.users',)
   
  
    def __repr__(self):
        return f"User| id: {self.id}, username: {self.username}, password: {self._password_hash}"
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))



class Job(db.Model, SerializerMixin):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String)
    title = db.Column(db.String)
    job_description = db.Column(db.String)
    job_type =  db.Column(db.String)
    industry = db.Column(db.String)
    remote = db.Column(db.Boolean, default=False)
    salary = db.Column(db.String)
    location = db.Column(db.String)
    longitude = db.Column(db.Float)
    latitude =  db.Column(db.Float)
    created_at = db.Column(db.DateTime, server_default=func.now())
    
    users = db.relationship('User', secondary= user_job_join, back_populates='jobs')

    responsibilities = db.relationship('Responsibility', backref='job', cascade='all, delete-orphan')
    qualifications = db.relationship('Qualification', backref='job', cascade='all, delete-orphan')

    serialize_rules = ('-responsibilities.job', '-qualifications.job')
    
    def __repr__(self):
        return f"Job| id: {self.id}, title: {self.title}"
    
class Responsibility(db.Model, SerializerMixin):
    __tablename__ = 'responsibilities'

    id = db.Column(db.Integer, primary_key=True)
    obligation = db.Column(db.String)
    job_id = db.Column(db.Integer(), db.ForeignKey('jobs.id'))

    serialize_rules = ('-job.responsibilities',)
    
    def __repr__(self):
        return f"Responsibility| id: {self.id}, obligation: {self.obligation}"
    
class Qualification(db.Model, SerializerMixin):
    __tablename__ = 'qualifications'
    
    id = db.Column(db.Integer, primary_key=True)
    prerequisite = db.Column(db.String)
    job_id = db.Column(db.Integer(), db.ForeignKey('jobs.id'))

    serialize_rules = ('-job.qualifications',)
    
    def __repr__(self):
        return f"Qualification| id: {self.id}, prerequisite: {self.prerequisite}"