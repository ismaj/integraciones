from fastapi import FastAPI
from app.db.db import init_db
from app.api.endpoints import cliente, factura

# Instancia principal de la aplicación
app = FastAPI(
    title="API Clientes y Facturación",
    version="1.0.0"
)
init_db()
# Incluir routers
app.include_router(cliente.router, prefix="/api/clientes", tags=["Clientes"])
app.include_router(factura.router, prefix="/api/facturas", tags=["Facturas"])
