const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


app.all('/', (req,res) =>{
    res.status(404).sendFile(path.resolve('./resources/access-denied.html'))
});

app.use(express.static(path.join(__dirname, 'secret')));
app.use(express.static(path.join(__dirname, 'resources'))); //new

//app.use(express.static(path.join('./')));

// Vulnerable endpoint to read file content with basic validation
app.get('/read-file', (req, res) => {
    const bypass = '../secret/index.html'
    const fileName = req.query.file;
    //console.log(fileName)
    if (fileName === bypass){
        res.status(200).sendFile(path.resolve('./secret/index.html'))
    }else{
        res.status(403).sendFile(path.resolve('./resources/access-denied.html'))
    }
});


const port = 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
