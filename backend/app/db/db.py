from app.db.session import engine
from app.models import user, cliente, factura, factura_detalle

def init_db():
    user.Base.metadata.create_all(bind=engine)
    cliente.Base.metadata.create_all(bind=engine)
    factura.Base.metadata.create_all(bind=engine)
    factura_detalle.Base.metadata.create_all(bind=engine)
