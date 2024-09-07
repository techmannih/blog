import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db.sqlite");

// Create the posts table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL
    )
  `);
});

 export default db;
