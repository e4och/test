const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./')));


app.get('*', (req,res) =>{

    const method = "GET";
    const request = req.method;
    //console.log(request);
    if(method == request){
        res.status(403).sendFile(path.resolve('./access-denied.html'))
    }
})

app.post('*', (req,res) =>{

    const method = "POST";
    const request = req.method;
    //console.log(request);
    if(method == request){
        res.status(200).sendFile(path.resolve('./access-granted.html'))
    }
})





const port = 3002;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})