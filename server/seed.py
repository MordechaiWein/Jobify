from app import app
from models import db, User, Job, Responsibility, Qualification

with app.app_context():

    print("🧨Deleting everything...")

    Job.query.delete()
    Responsibility.query.delete()
    Qualification.query.delete()

    print("🌱Seeding database...")

    db.session.add_all([
        
        Job(title = 'Software Engineer'),
        Responsibility(obligation = 'hello', job_id = 1),
        Qualification(prerequisite = 'goodbye', job_id = 1),
    ])

    db.session.commit()

    print("✅Seeding complete!")
