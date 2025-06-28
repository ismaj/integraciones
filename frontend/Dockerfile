FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package.json package-lock.json ./
RUN npm install --omit=optional

# Copiar código del frontend
COPY . .

# Exponer puerto para Vite
EXPOSE 5173

# Iniciar la app
CMD ["npm", "run", "dev"]
