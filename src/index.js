const express = require('express');
const app = express();
const port = require('dotenv').config();
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(port, () => {
    console.log(`Performance Dashboard API is running on http://localhost:${port}`);
});