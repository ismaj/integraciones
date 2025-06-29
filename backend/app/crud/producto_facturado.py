from sqlalchemy.orm import Session
from app.models.producto_facturado import ProductoFacturado

def obtener_productos_por_factura(db: Session, factura_id: int):
    return db.query(ProductoFacturado).filter(ProductoFacturado.factura_id == factura_id).all()
