FROM node:22-slim as dev

# Install build dependencies for native modules (sharp, etc.)
RUN apt-get update && apt-get install -y python3 build-essential ca-certificates --no-install-recommends && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Desactivar telemetría SOLO UNA VEZ al principio
RUN npx next telemetry disable || echo "Telemetry disabled"

# INSTALAR @types/aos (si es necesario) y dependencias
RUN npm install --save-dev @types/aos@latest || true
RUN npm ci --include=dev

# Verificar que @types/aos está instalado
RUN echo "=== Verificando @types/aos ===" && \
    if [ -d "node_modules/@types/aos" ]; then \
      echo "✓ @types/aos instalado correctamente"; \
    else \
      echo "⚠ @types/aos NO encontrado, pero continuando..."; \
    fi

# Copiar el resto del código
COPY . .

# VERIFICAR PRIMERO dónde está convert-images.js
RUN echo "=== Buscando convert-images.js ===" && \
    find . -name "convert-images.js" 2>/dev/null || echo "No encontrado"

# convertir imágenes antes de construir (SOLO si existe)
RUN if [ -f "app/scripts/convert-images.js" ]; then \
      echo "Ejecutando convert-images desde app/scripts/..."; \
      node app/scripts/convert-images.js; \
    elif [ -f "scripts/convert-images.js" ]; then \
      echo "Ejecutando convert-images desde scripts/..."; \
      node scripts/convert-images.js; \
    else \
      echo "⚠ convert-images.js no encontrado, omitiendo..."; \
    fi

# Construir la aplicación (usar el bin directo de Next para evitar problemas de require relativo)
RUN node node_modules/next/dist/bin/next build

EXPOSE 3000

# Variables de entorno (sin NODE_OPTIONS problemática)
ENV NEXT_PRIVATE_TURBOPACK=0
ENV NEXT_TELEMETRY_DISABLED=1

# CMD simplificado
CMD ["npm", "run", "dev"]