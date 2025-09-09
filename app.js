    const express = require('express');
    const mysql = require('mysql');
    const cors = require('cors');
    const path = require('path');
    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'root', 
        database: 'movies_db'
    });

    db.connect(err => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');
    });

    // API Endpoints
    // GET /movies
    app.get('/movies', (req, res) => {
        db.query('SELECT * FROM movies', (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        });
    });

    // POST /movies
    app.post('/movies', (req, res) => {
        console.log('Received movie:', req.body); // Debug
        const { title, director, genre, release_year, rating } = req.body;
        const newMovie = { title, director, genre, release_year, rating };
        db.query('INSERT INTO movies SET ?', newMovie, (err, result) => {
            if (err) {
                console.error('SQL Error:', err); // Debug
                return res.status(500).send(err);
            }
            res.status(201).json({ id: result.insertId, ...newMovie });
        });
    });

    // PUT /movies/:id
    app.put('/movies/:id', (req, res) => {
        const { id } = req.params;
        const updatedMovie = req.body;
        db.query('UPDATE movies SET ? WHERE id = ?', [updatedMovie, id], (err, result) => {
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send('Movie not found');
            res.json({ message: 'Movie updated successfully' });
        });
    });

    // DELETE /movies/:id
    app.delete('/movies/:id', (req, res) => {
        const { id } = req.params;
        db.query('DELETE FROM movies WHERE id = ?', [id], (err, result) => {
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send('Movie not found');
            res.send('Movie deleted successfully');
        });
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });