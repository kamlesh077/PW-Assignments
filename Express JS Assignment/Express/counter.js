const express = require('express');
const app = express();

let counter = 0; // Initialize counter

// Route to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter: counter });
});

// Route to increment the counter by 1
app.get('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// Route to decrement the counter by 1
app.get('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
