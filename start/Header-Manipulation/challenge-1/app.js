const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('./where.html'));
    res.setHeader('flag', 'hh{"H3AD3R-HUNT3R"}');
    res.status(200);
});

// app.get('*',(req, res) =>{
//     res.status(404).send("Resource not found!");
// });

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});