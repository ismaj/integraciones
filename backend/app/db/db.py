from app.db.session import engine
from app.models import cliente, factura

def init_db():
    cliente.Base.metadata.create_all(bind=engine)
    factura.Base.metadata.create_all(bind=engine)

