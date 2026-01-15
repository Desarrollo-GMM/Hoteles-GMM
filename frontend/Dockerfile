FROM node:22-alpine as dev

RUN apk add --no-cache libc6-compat && npm install -g pnpm

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package.json package-lock.json* ./
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 3000

# Health check (curl ya está instalado)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000 || exit 1

# Iniciar la aplicación
CMD ["npm", "run", "dev"]