const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./')));

app.get('*', (req,res) =>{
    const value = "ja";
    let check = req.headers['accept-language']
    check = check.toLowerCase()
    if(check.includes(value)){
        res.status(200).sendFile(path.resolve('./access-granted.html'))
    }else{
        res.status(403).sendFile(path.resolve('./access-denied.html'))
    }
})

// app.get('*',(req, res) =>{
//     res.status(404).send("Resource not found!")
// })

const port = 3001;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
})