require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/programmers", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM programmers");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/programmers", async (req, res) => {
    try {
        const { name, email, role, start_date } = req.body;
        const result = await pool.query(
            `INSERT INTO programmers (details)
             VALUES (ROW($1, $2, $3, $4)::Employee)
             RETURNING *`,
            [name, email, role, start_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/designers", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM designers");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/designers", async (req, res) => {
    try {
        const { name, email, role, start_date } = req.body;
        const result = await pool.query(
            `INSERT INTO designers (details)
             VALUES (ROW($1, $2, $3, $4)::Employee)
             RETURNING *`,
            [name, email, role, start_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Performance Dashboard API is running on http://localhost:${port}`);
});