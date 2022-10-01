// Simple web server deployment from node to heroku

const express = require('express');
const path = require('path');
const app = express()
const port = process.env.PORT || 3000

// set the path to the html file

// create function to use get method to issue the http get command
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, 'www/index.html'));
});


// create the listening function for the get request to port 8080
app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
