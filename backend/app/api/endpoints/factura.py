from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.factura import FacturaCreate, FacturaOut
from app.crud import factura as crud_factura
from app.api.endpoints.dependencies import get_db
from typing import List

router = APIRouter(prefix="/facturas", tags=["Facturas"])

@router.post("/", response_model=FacturaOut)
def crear_factura(factura: FacturaCreate, db: Session = Depends(get_db)):
    return crud_factura.crear_factura(db, factura)

@router.get("/", response_model=List[FacturaOut])
def listar_facturas(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud_factura.obtener_facturas(db, skip, limit)

@router.get("/{factura_id}", response_model=FacturaOut)
def obtener_factura(factura_id: int, db: Session = Depends(get_db)):
    factura = crud_factura.obtener_factura_por_id(db, factura_id)
    if not factura:
        raise HTTPException(status_code=404, detail="Factura no encontrada")
    return factura
