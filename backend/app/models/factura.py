from sqlalchemy import Column, Integer, String, ForeignKey, Date
from sqlalchemy.orm import relationship
from app.db.session import Base

class Factura(Base):
    __tablename__ = "facturas"

    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("clientes.id"), nullable=False)
    numero = Column(String, nullable=False, unique=True)
    fecha = Column(Date, nullable=False)

    cliente = relationship("Cliente", backref="facturas")
    productos = relationship("ProductoFacturado", back_populates="factura")
