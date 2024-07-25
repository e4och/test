const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./resources/')));


app.get('/', (req,res) =>{
    res.status(200).sendFile(path.resolve('./resources/index.html'))
});

app.get('/robots.txt', (req,res) =>{
    res.status(200).sendFile(path.resolve('./resources/robots.txt'))
});


app.get('/Top-Secret', (req, res) =>{
    res.status(200).sendFile(path.resolve('./resources/Top-Secret/superSecret.html'));
});


const port = 6004;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});