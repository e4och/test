const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./resources')));

app.get('*', (req,res) =>{
    res.status(200).sendFile(path.resolve('./resources/index.html'));}
);

const port = 6001;
app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});
