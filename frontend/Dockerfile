FROM node:22-alpine as dev

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# INSTALAR @types/aos PRIMERO y explícitamente
RUN npm install --save-dev @types/aos@latest

RUN npx next telemetry disable

# Luego instalar todas las demás dependencias
RUN npm ci --include=dev

# Verificar que @types/aos está instalado
RUN echo "=== Verificando @types/aos ===" && \
    npm list @types/aos && \
    ls -la node_modules/@types/ | grep -i aos && \
    if [ -d "node_modules/@types/aos" ]; then \
      echo "✓ @types/aos instalado correctamente"; \
    else \
      echo "✗ ERROR: @types/aos NO instalado"; \
      exit 1; \
    fi

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

EXPOSE 3000

# En tu Dockerfile agrega:
RUN npx next telemetry disable

CMD ["npm", "run", "dev"]