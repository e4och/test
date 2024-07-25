const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'secret')));
app.use(express.static(path.join(__dirname, 'resources')));


app.get("/resources", (req,res) =>{
    res.status(200).sendFile(path.resolve('./secret/superSecretContent.html'))
})

app.get("*", (req,res) =>{
    res.status(404).sendFile(path.resolve('./resources/not-found.html'))
})

const port = 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})


//status code of responses