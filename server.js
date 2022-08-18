const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: '',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// Query database


// Read all movies
app.get('/api/movies', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
