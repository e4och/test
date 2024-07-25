const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, 'secret')));
app.use(express.static(path.join(__dirname, 'resources')));


app.use(bodyParser.json());  // Parse JSON data from requests

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('./resources/login.html'));
});

app.get('/secret', (req, res) => {
    res.status(200).sendFile(path.resolve('./secret/admin.html'));
});

const port = 5002;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
