const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Parse JSON and urlencoded data from requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '/secret')));
app.use(express.static(path.join(__dirname, '/resources'))); //new

//app.use(express.static(path.join('./')));

// Serve login page for any GET request
app.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve('./resources/login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //console.log(req.body);

    // Perform validation (replace with your actual validation logic)
    if (username === 'admin' && password === 'admin123') {
        res.status(200).sendFile(path.resolve(__dirname,'./secret/admin.html'));
        console.log(__dirname)
    } else {
        res.status(403).sendFile(path.resolve(__dirname,'./resources/access-denied.html'));
    }
});

const port = 5003;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
