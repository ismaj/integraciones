from fastapi import FastAPI
from app.db import db
from app.api import cliente, factura

# Crear tablas si no existen
db.Base.metadata.create_all(bind=db.engine)

# Instancia principal de la aplicación
app = FastAPI(
    title="API Clientes y Facturación",
    version="1.0.0"
)

# Incluir routers
app.include_router(cliente.router, prefix="/api/clientes", tags=["Clientes"])
app.include_router(factura.router, prefix="/api/facturas", tags=["Facturas"])
