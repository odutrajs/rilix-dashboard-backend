FROM node:20-alpine

WORKDIR /app

# Copia apenas o package.json e lock para instalar dependências primeiro
COPY package.json package-lock.json ./
RUN npm install

# ⚠️ Copie o restante dos arquivos, incluindo a pasta prisma/ ANTES de rodar generate
COPY . .

# ✅ Gere o client Prisma (agora a pasta prisma existe no container)
RUN npx prisma generate

# (Opcional: aplique as migrações no banco de produção)
# RUN npx prisma migrate deploy

# Compile o código, se for necessário
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
