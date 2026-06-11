const express = require('express');
const app = express();

// Main page route
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

module.exports = app;
