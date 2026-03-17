# Run TravelersChoice locally

You need MySQL and a `.env` file so the app can connect to the database.

## 1. Install MySQL

If you don’t have MySQL:

- **Mac (Homebrew):** `brew install mysql` then `brew services start mysql`
- Or install [MySQL Community Server](https://dev.mysql.com/downloads/mysql/) and start it.

## 2. Create the database

In MySQL (terminal or GUI):

```sql
CREATE DATABASE IF NOT EXISTS travelerschoice_db;
```

## 3. Create a `.env` file

In the **project root** (same folder as `package.json`), create a file named `.env` (no filename before the dot).

Copy the contents of `.env.example` and set your real MySQL user and password:

```
DB_NAME=travelerschoice_db
DB_USER=root
DB_PASSWORD=your_actual_mysql_password

SESSION_SECRET=any_random_string_for_sessions
```

- `DB_USER` is usually `root` if you didn’t create another user.
- `DB_PASSWORD` is the password you use to log in to MySQL (empty if you never set one).

Save the file. **Do not commit `.env`** (it’s in `.gitignore`).

## 4. Install and run

```bash
npm install
npm run seed    # load sample data
npm start       # or: node server.js
```

Then open http://localhost:3001 in your browser.

If you see “Missing database config”, the app didn’t find `.env` or the variables above. Check that `.env` is in the project root and has no typos.
