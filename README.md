Rilix Dashboard – Backend
API RESTful desenvolvida em Node.js + Express, com banco de dados PostgreSQL, para gerenciar notícias no painel administrativo da Rilix. Suporta operações CRUD com upload de imagens, validações robustas com Zod, e integração via Docker para fácil deploy.

⚙️ Tecnologias utilizadas
🟢 Node.js + Express

🧪 Zod para validação de dados

🗂️ Prisma ORM com PostgreSQL

🖼️ Upload de imagens com multer

🌱 dotenv para variáveis de ambiente

🐳 Docker + Docker Compose para ambiente isolado

👨‍💻 ESLint + Prettier para padronização


Rodar o projeto ->
npm install

Configure o .env
DATABASE_URL=postgresql://rilis_dahboard_user:otTJV4LRLGZhSIUAhTMX5eEG5MBxCsiT@dpg-d1q4j4c9c44c7397h2hg-a.oregon-postgres.render.com/rilis_dahboard
PORT=4000

Rode as migrations
npx prisma migrate dev

Inicie o servidor
npm run dev


Rodar com docker
docker-compose up --build

2. Serviços disponíveis
Serviço	Porta	URL
Backend	4000	http://localhost:4000
PostgreSQL	5432	localhost:5432
pgAdmin	8080	http://localhost:8080

Credenciais do pgAdmin:

Email: admin@rilix.com

Senha: rilix123


🧪 Endpoints principais
Método	Rota	Descrição
GET	/news	Lista todas as notícias
POST	/news	Cria uma nova notícia
PUT	/news/:id	Atualiza uma notícia
DELETE	/news/:id	Remove uma notícia
GET	/uploads/:img	Serve imagens da notícia

