from pydantic import BaseModel
from datetime import date
from typing import List
from .producto_facturado import ProductoFacturadoOut

class FacturaBase(BaseModel):
    cliente_id: int
    numero: str
    fecha: date

class FacturaCreate(FacturaBase):
    productos: List[ProductoFacturadoOut]

class FacturaOut(FacturaBase):
    id: int
    productos: List[ProductoFacturadoOut]

    class Config:
        orm_mode = True
