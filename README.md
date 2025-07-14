# 📰 Rilix Dashboard – Backend

API RESTful desenvolvida em **Node.js + Express** com banco de dados **PostgreSQL**, focada na gestão de **notícias** para o painel administrativo da Rilix. Suporta **CRUD com upload de imagens**, **validações robustas com Zod**, e **deploy facilitado com Docker**.

---

## ⚙️ Tecnologias utilizadas

- 🟢 **Node.js + Express** – API e roteamento
- 🧪 **Zod** – Validação de dados
- 🗂️ **Prisma ORM** – Mapeamento objeto-relacional
- 🐘 **PostgreSQL** – Banco de dados relacional
- 🖼️ **Multer** – Upload de imagens
- 🌱 **dotenv** – Variáveis de ambiente
- 🐳 **Docker + Docker Compose** – Ambiente isolado e replicável
- 🧹 **ESLint + Prettier** – Padronização e linting

---

## 📦 Como rodar localmente

### 1. Instale as dependências

npm install

### 2. Configure o .env

DATABASE_URL=postgresql://rilis_dahboard_user:otTJV4LRLGZhSIUAhTMX5eEG5MBxCsiT@dpg-d1q4j4c9c44c7397h2hg-a.oregon-postgres.render.com/rilis_dahboard
PORT=4000

### 2. Rode as migrações

npx prisma migrate dev

### 2. Inicie o servidor

npm run dev

## 🐳 Rodando com Docker

docker-compose up --build

### Serviços disponíveis

```text
| Serviço    | Porta | URL                                            |
| ---------- | ----- | ---------------------------------------------- |
| Backend    | 4000  | [http://localhost:4000](http://localhost:4000) |
| PostgreSQL | 5432  | localhost:5432                                 |
| pgAdmin    | 8080  | [http://localhost:8080](http://localhost:8080) |
```
