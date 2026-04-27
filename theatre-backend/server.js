const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Σύνδεση με βάση
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123', // βάλε το δικό σου password
    database: 'theatre_app'
});

db.connect(err => {
    if (err) {
        console.log('Database error:', err);
    } else {
        console.log('Connected to MariaDB');
    }
});

// TEST
app.get('/', (req, res) => {
    res.send('API is working');
});

// GET THEATRES
app.get('/theatres', (req, res) => {
    db.query('SELECT * FROM theatres', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// GET SHOWS
app.get('/shows', (req, res) => {
    db.query('SELECT * FROM shows', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// CREATE RESERVATION
app.post('/reservations', (req, res) => {
    const { user_id, showtime_id, seats } = req.body;

    const sql = 'INSERT INTO reservations (user_id, showtime_id, seats, status) VALUES (?, ?, ?, ?)';

    db.query(sql, [user_id, showtime_id, seats, 'active'], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Reservation created' });
    });
});

// SERVER
app.listen(3000, () => {
    console.log('Server running on port 3000');
});