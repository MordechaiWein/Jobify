"""Create Jobify database tables

Revision ID: 097fc6c422d3
Revises: 
Create Date: 2023-09-07 11:52:08.412307

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '097fc6c422d3'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('jobs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('company_name', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('job_description', sa.String(), nullable=True),
    sa.Column('job_type', sa.String(), nullable=True),
    sa.Column('industry', sa.String(), nullable=True),
    sa.Column('remote', sa.Boolean(), nullable=True),
    sa.Column('salary', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('longitude', sa.Integer(), nullable=True),
    sa.Column('latitude', sa.Integer(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('admin', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('considerations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('notes', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('qualifications',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('prerequisite', sa.String(), nullable=True),
    sa.Column('job_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['job_id'], ['jobs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('responsibilities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('obligation', sa.String(), nullable=True),
    sa.Column('job_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['job_id'], ['jobs.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_job_joins',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('job_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['job_id'], ['jobs.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_job_joins')
    op.drop_table('responsibilities')
    op.drop_table('qualifications')
    op.drop_table('considerations')
    op.drop_table('users')
    op.drop_table('jobs')
    # ### end Alembic commands ###
