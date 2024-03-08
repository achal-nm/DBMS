const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');
const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'CaptainAmerica27',
    database: 'munch_maps'
});

// Attempt to connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

// Express.js server setup
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Endpoint to fetch restaurant data
app.get('/restaurants', (req, res) => {
    connection.query('SELECT * FROM Restaurant', (error, results) => {
        if (error) {
            console.error('Error fetching restaurants: ', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});