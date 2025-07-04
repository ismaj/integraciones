from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.cliente import ClienteCreate, ClienteOut
from app.crud import cliente as crud_cliente
from app.api.endpoints.dependencies import get_db
from typing import List

router = APIRouter()

@router.post("/", response_model=ClienteOut)
def crear_cliente(cliente: ClienteCreate, db: Session = Depends(get_db)):
    return crud_cliente.crear_cliente(db, cliente)

@router.get("/", response_model=List[ClienteOut])
def listar_clientes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_cliente.obtener_clientes(db, skip, limit)

@router.get("/{cliente_id}", response_model=ClienteOut)
def obtener_cliente(cliente_id: int, db: Session = Depends(get_db)):
    cliente = crud_cliente.obtener_cliente_por_id(db, cliente_id)
    if not cliente:
        raise HTTPException(status_code=404, detail="Cliente no encontrado")
    return cliente
