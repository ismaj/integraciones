from sqlalchemy.orm import Session
from app.models.cliente import Cliente
from app.schemas.cliente import ClienteCreate

def crear_cliente(db: Session, cliente_in: ClienteCreate) -> Cliente:
    cliente = Cliente(**cliente_in.dict())
    db.add(cliente)
    db.commit()
    db.refresh(cliente)
    return cliente

def obtener_clientes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Cliente).offset(skip).limit(limit).all()

def obtener_cliente_por_id(db: Session, cliente_id: int):
    return db.query(Cliente).filter(Cliente.id == cliente_id).first()
