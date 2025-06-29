from sqlalchemy.orm import Session
from app.models.factura import Factura
from app.models.producto_facturado import ProductoFacturado
from app.schemas.factura import FacturaCreate
from app.schemas.producto_facturado import ProductoFacturadoCreate

def crear_factura(db: Session, factura_in: FacturaCreate) -> Factura:
    factura = Factura(
        cliente_id=factura_in.cliente_id,
        numero=factura_in.numero,
        fecha=factura_in.fecha
    )
    db.add(factura)
    db.commit()
    db.refresh(factura)

    for prod in factura_in.productos:
        producto = ProductoFacturado(
            factura_id=factura.id,
            codigo=prod.codigo,
            descripcion=prod.descripcion,
            precio=prod.precio
        )
        db.add(producto)
    
    db.commit()
    db.refresh(factura)
    return factura

def obtener_facturas(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Factura).offset(skip).limit(limit).all()

def obtener_factura_por_id(db: Session, factura_id: int):
    return db.query(Factura).filter(Factura.id == factura_id).first()
