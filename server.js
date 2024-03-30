// server.js

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// API endpoint to fetch website content
app.get('/fetch-website', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching website content:', error);
        res.status(500).send('Error fetching website content');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
