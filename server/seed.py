from app import app
from models import db, User, Job, Responsibility, Qualification

with app.app_context():

    # print("🧨Deleting everything...")
    # User.query.delete()
    # job_to_delete = Job.query.filter_by(id=7).first()
    # Job.query.delete()
    # Responsibility.query.delete()
    # Qualification.query.delete()

    print("🌱Seeding database...")
    mord = User.query.filter(User.username == "Mordechai").first()
    mord.admin = True
    # db.session.add_all([
        
    #     Job(title = 'Software Engineer'),
    #     Responsibility(obligation = 'hello', job_id = 6),
    #     Qualification(prerequisite = 'goodbye', job_id = 6),
    # ])

    # db.session.commit()
    # db.session.delete(job_to_delete)
    # db.session.delete()
    db.session.commit()

    print("✅Seeding complete!")
