"""drop considerations and add constraint

Revision ID: 3bb79b155622
Revises: 9f69bcb4e870
Create Date: 2023-09-14 01:13:34.033667

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3bb79b155622'
down_revision = '9f69bcb4e870'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('considerations')
    with op.batch_alter_table('user_job_joins', schema=None) as batch_op:
        batch_op.create_unique_constraint('unique_user_job', ['user_id', 'job_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user_job_joins', schema=None) as batch_op:
        batch_op.drop_constraint('unique_user_job', type_='unique')

    op.create_table('considerations',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('notes', sa.VARCHAR(), autoincrement=False, nullable=True),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='considerations_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='considerations_pkey')
    )
    # ### end Alembic commands ###
