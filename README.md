# Deployment and DevOps Essentials – MERN Week 7

##  Project Overview

This project demonstrates deployment and DevOps practices for a full MERN stack application. The app includes:

* **Frontend:** React + Vite
* **Backend:** Express.js + MongoDB
* **Database:** MongoDB Atlas

The project has been deployed to production and is accessible online.

---

##  Deployed URLs

* **Frontend (React App):** [Vercel URL here]
   `https://deployment-week7-client.vercel.app`
* **Backend (Express API):** [Render URL here]
    `https://deployment-and-devops-essentials-charis.onrender.com`
  
> Replace the frontend URL with your actual Vercel deployment link.

---

##  Project Structure

```
deployment-and-devops-essentials-Charis-Tracie/
├── server/        ← Backend (Express + MongoDB)
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   └── models/
└── client/        ← Frontend (React + Vite)
    ├── package.json
    ├── vite.config.js
    └── src/
```

---

## ⚙️ Installation (Local Development)

### Backend

```bash
cd server
npm install
npm run dev   # runs server on localhost:5000
```

### Frontend

```bash
cd client
npm install
npm run dev   # runs frontend on localhost:5173+
```

* Make sure to set environment variables in `.env`:

```env
MONGO_URI=<Your MongoDB Atlas URI>
```

* Frontend `.env`:

```env
VITE_API_URL=http://localhost:5000
```

---

## Deployment

### Backend (Render)

1. Create a new Web Service on Render.
2. Set **Root Directory:** `server`
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. Add environment variable:

```
MONGO_URI=<MongoDB Atlas URI>
```

6. Render automatically deploys on every GitHub push.

### Frontend (Vercel)

1. Import GitHub repo into Vercel.
2. Set **Root Directory:** `client`
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. Add environment variable:

```
VITE_API_URL=https://deployment-and-devops-essentials-charis.onrender.com
```

6. Vercel automatically deploys on every GitHub push.

---

##  CI/CD

* GitHub Actions used for **Continuous Integration**:

  * Backend tests
  * Frontend linting & build
* Automatic deployment to Render and Vercel on push to `main`.



##  Monitoring & Maintenance

* Backend logging enabled via Express.
* Render monitors server uptime.
* Frontend performance monitored via browser tools.
* Database backups handled by MongoDB Atlas.





##  Usage

1. Access frontend via Vercel URL.
2. Interact with API via deployed Render backend.
3. All CRUD operations for your MERN app work in production.

