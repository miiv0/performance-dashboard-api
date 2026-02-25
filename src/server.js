require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Performance Dashboard API is running on http://localhost:${port}`);
});

app.get("/test-db", async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
});