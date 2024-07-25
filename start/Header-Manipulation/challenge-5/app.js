const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./')));

app.get('*', (req,res) =>{
  const token = "U3VwZXJTZWNyZXRUb2tlbgo";
  if (req.headers.hasOwnProperty('x-secret-token') && req.headers['x-secret-token'] == token) {
    res.status(200).sendFile(path.resolve('./access-granted.html'));
  }else {
    res.status(403).sendFile(path.resolve('./access-denied.html'));}
});

const port = 3004;
app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
