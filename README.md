# Premium MERN Portfolio

This is a complete MERN portfolio website using the exact structure requested:

- React + Vite frontend
- Express + MongoDB backend
- Admin login with JWT
- Project CRUD
- Skill CRUD
- Contact form saved to MongoDB
- Premium dark UI with animations
- Responsive mobile layout

## 1. Setup backend

```bash
cd server
npm install
```

Create `.env` inside `server`:

```env
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/portfolioDB
JWT_SECRET=write_a_long_secret_key_here
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin12345
EMAIL_USER=
EMAIL_PASS=
```

Seed admin and demo data:

```bash
npm run seed
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

## 2. Setup frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

## 3. Admin login

Open:

```txt
http://localhost:5173/admin
```

Demo credentials after seeding:

```txt
Email: admin@portfolio.com
Password: admin12345
```

## 4. Replace your details

Edit these files:

- `client/src/components/Hero.jsx`
- `client/src/components/About.jsx`
- `client/src/components/Contact.jsx`
- `client/src/components/Footer.jsx`
- `client/public/profile.png`
- `client/public/resume.pdf`

## 5. API endpoints

```txt
GET    /api/projects
GET    /api/projects/:id
POST   /api/projects        protected
PUT    /api/projects/:id    protected
DELETE /api/projects/:id    protected

GET    /api/skills
POST   /api/skills          protected
PUT    /api/skills/:id      protected
DELETE /api/skills/:id      protected

POST   /api/contact
GET    /api/contact         protected
PUT    /api/contact/:id/read protected
DELETE /api/contact/:id     protected

POST   /api/admin/login
GET    /api/admin/profile   protected
```
