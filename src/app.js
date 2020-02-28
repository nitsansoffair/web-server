const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Andrew',
            age: 27
        },
        {
            name: 'Andrew',
            age: 27
        }
    ]);
});

app.get('/about', (req, res) => {
    res.send('<h1>title about</h1>.');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'string',
        location: 'string'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
