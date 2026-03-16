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

## 2. Deploy on Heroku (step-by-step)

### Step 0: Install Heroku CLI and log in (one-time)

1. **Install the Heroku CLI**  
   - Mac (Homebrew): run in Terminal: `brew tap heroku/brew && brew install heroku`  
   - Or download from: https://devcenter.heroku.com/articles/heroku-cli  
2. **Log in**: open Terminal and run:
   ```bash
   heroku login
   ```
   A browser window will open; log in with your Heroku account (or create one at heroku.com).

---

### Step 1: Create a Heroku app (from your project folder)

1. Open Terminal.
2. Go to your project folder, for example:
   ```bash
   cd /Users/aminforout/Desktop/Software/TravelersChoice-main
   ```
3. Run **one** of these:
   - To pick your own name (e.g. `travelers-choice-amin`):
     ```bash
     heroku create travelers-choice-amin
     ```
   - To let Heroku choose a random name:
     ```bash
     heroku create
     ```
4. You’ll see a URL like `https://travelers-choice-amin.herokuapp.com`. That’s your app’s address.

---

### Step 2: Add a MySQL database (JawsDB) in the Heroku website

Your app needs a database. Heroku gives you one via an “add-on” called JawsDB.

1. Go to **https://dashboard.heroku.com** and log in.
2. Click your app name (e.g. **travelers-choice-amin**).
3. Click the **“Resources”** tab at the top.
4. In the “Add-ons” section, click **“Find more add-ons”** (or the search box) and type **JawsDB**.
5. Click **“JawsDB MySQL”** → choose the **free** plan (Kitefin) → **“Submit Order Form”** or **“Provision”**.
6. Done. Heroku will automatically add a variable called `JAWSDB_URL` to your app (your code already uses it).

---

### Step 3: Add SESSION_SECRET in the Heroku website

Your app needs a secret key for keeping user sessions secure.

1. **Create a random secret**  
   In Terminal run:
   ```bash
   openssl rand -hex 32
   ```
   Copy the long string it prints (e.g. `a1b2c3d4e5f6...`). You’ll paste it in the next step.

2. **Put it in Heroku**  
   - On https://dashboard.heroku.com, open your app.
   - Click the **“Settings”** tab.
   - Click **“Reveal Config Vars”**.
   - Under “Config Vars”, set:
     - **KEY**: `SESSION_SECRET`
     - **VALUE**: paste the long string from step 1
   - Click **“Add”** (or Save).

---

### Step 4: Push your code to Heroku (deploy)

From your project folder in Terminal:

```bash
git push heroku main
```

If your branch is named something else (e.g. `master`), use:

```bash
git push heroku master:main
```

Heroku will build and start your app. Wait until it says “Verifying deploy... done.”

---

### Step 5 (optional): Add sample data

To load the seed data (sample countries/reviews) on Heroku, run once:

```bash
heroku run npm run seed
```

You can skip this if you don’t need sample data.

---

### Step 6: Open your app in the browser

In Terminal run:

```bash
heroku open
```

Your browser will open your live app (e.g. `https://travelers-choice-amin.herokuapp.com`).

---

### Summary: order of steps

| Order | What to do | Where |
|-------|------------|--------|
| 0 | Install Heroku CLI, run `heroku login` | Terminal (one-time) |
| 1 | `heroku create your-app-name` | Terminal, in project folder |
| 2 | Add JawsDB MySQL add-on | Heroku Dashboard → Resources |
| 3 | Add Config Var `SESSION_SECRET` | Heroku Dashboard → Settings → Config Vars |
| 4 | `git push heroku main` | Terminal |
| 5 | (Optional) `heroku run npm run seed` | Terminal |
| 6 | `heroku open` | Terminal |

---

### If something goes wrong

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
