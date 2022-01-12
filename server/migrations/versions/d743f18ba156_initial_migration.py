"""Initial Migration

Revision ID: d743f18ba156
Revises: 
Create Date: 2022-01-07 13:44:11.919297

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd743f18ba156'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('articles_ibfk_1', 'articles', type_='foreignkey')
    op.create_foreign_key(None, 'articles', 'bloggers', ['blogger_id'], ['id'], ondelete='cascade')
    op.add_column('bloggers', sa.Column('password', sa.String(length=255), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('bloggers', 'password')
    op.drop_constraint(None, 'articles', type_='foreignkey')
    op.create_foreign_key('articles_ibfk_1', 'articles', 'bloggers', ['blogger_id'], ['id'])
    # ### end Alembic commands ###