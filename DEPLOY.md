# Deploy TravelersChoice to Heroku & Add to Portfolio

## 1. Make a Git repository

From the project root:

```bash
git init
git add .
git commit -m "Initial commit - TravelersChoice app"
```

Create a new repo on GitHub (e.g. `TravelersChoice`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/TravelersChoice.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Heroku

### Prerequisites

- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and logged in (`heroku login`)
- MySQL database: Heroku uses **JawsDB MySQL** (add-on) for MySQL apps

### Steps

1. **Create the app**
   ```bash
   heroku create your-app-name
   ```
   (Or `heroku create` to get a random name.)

2. **Add JawsDB MySQL**
   - In [Heroku Dashboard](https://dashboard.heroku.com/) → your app → **Resources** → **Find more add-ons** → search **JawsDB MySQL** → add it (e.g. free tier).
   - Heroku will set `JAWSDB_URL` automatically; your `config/connection.js` already uses it.

3. **Set session secret**
   - Dashboard → your app → **Settings** → **Reveal Config Vars**
   - Add: `SESSION_SECRET` = a long random string (e.g. from `openssl rand -hex 32`)

4. **Deploy from Git**
   ```bash
   git push heroku main
   ```
   If your branch is not `main`, use e.g. `git push heroku your-branch:main`.

5. **Run migrations / seed (optional)**
   - Sequelize will sync models on first start (`sequelize.sync({ force: false })`). To seed data:
   ```bash
   heroku run npm run seed
   ```

6. **Open the app**
   ```bash
   heroku open
   ```

### Fixes already in this project

- **Port**: `server.js` uses `process.env.PORT || 3001` (Heroku sets `PORT`).
- **Database**: `config/connection.js` uses `JAWSDB_URL` when set (Heroku + JawsDB).
- **Session secret**: Uses `SESSION_SECRET` env var in production (set in Heroku Config Vars).
- **Procfile**: `web: npm start` so Heroku runs the app correctly.
- **Node**: `package.json` has `engines.node` for a consistent Node version.

### If something goes wrong

- **App crash**: `heroku logs --tail` to see errors.
- **DB connection**: Ensure JawsDB add-on is attached and `JAWSDB_URL` exists in Config Vars.
- **503 / “Application error”**: Check logs; often missing env var or DB not ready.

---

## 3. Add this project to your portfolio

### On your portfolio site

Add a **project card** or **section** with:

1. **Title**: TravelersChoice (or “Travel Destination Reviews”)
2. **Short description**: e.g. “Full-stack travel review app: users sign up, log in, and create/edit reviews for countries with ratings. Built with Node, Express, Handlebars, MySQL, and Sequelize.”
3. **Live link**: `https://your-app-name.herokuapp.com` (your Heroku URL)
4. **Repo link**: `https://github.com/YOUR_USERNAME/TravelersChoice`
5. **Tech stack**: Node.js, Express.js, Handlebars, MySQL, Sequelize, bcrypt, sessions, MVC
6. **Screenshots**: Use the ones from the README or add 1–2 of homepage, dashboard, and create-review.

### Optional: README badge

In the repo README you can add:

```markdown
[![Deployed on Heroku](https://img.shields.io/badge/Heroku-Deployed-430098?logo=heroku)](https://your-app-name.herokuapp.com)
```

### Credits

If this was a team project (e.g. bootcamp), keep the Credits section and mention “Team project” in your portfolio so it’s clear you didn’t build it alone.

---

## Quick reference

| Item            | Local                    | Heroku                          |
|----------------|--------------------------|----------------------------------|
| Database       | MySQL, `.env` vars       | JawsDB add-on → `JAWSDB_URL`    |
| Session secret | `.env` `SESSION_SECRET`  | Config Var `SESSION_SECRET`     |
| Port           | 3001                     | `process.env.PORT` (set by Heroku) |
