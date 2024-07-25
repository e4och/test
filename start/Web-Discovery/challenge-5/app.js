const express = require('express');
const path = require('path');
const fs = require('fs').promises;  // Using promises for fs operations
const app = express();

// Serve static files from the 'backup' and 'resources' directories
app.use(express.static(path.join(__dirname, 'backup')));
app.use(express.static(path.join(__dirname, 'resources')));

// Endpoint to serve backup file or 404 if file does not match
app.get('/backup', (req, res) => {
    const backup = 'backup_archive.zip';
    const fileName = req.query.file;
    if (fileName === backup) {
        res.status(200).sendFile(path.resolve('./backup/backup.html'));
    } else {
        res.status(404).sendFile(path.resolve('./resources/not-found.html'));
    }
});

// Endpoint to expose .env file
app.get('/env', async (req, res) => {
    const envFilePath = path.resolve('./env/.env');

    try {
        // Read .env file content
        const data = await fs.readFile(envFilePath, 'utf8');
        
        // Send .env file content as plain text
        res.status(200).type('text/plain').send(data);
    } catch (err) {
        console.error('Error reading .env file:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Default route handler for any other requests
app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve('./resources/not-found.html'));
});

const port = 5004;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
