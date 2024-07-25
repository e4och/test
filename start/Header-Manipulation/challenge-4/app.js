const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join('./')));

app.get('*', (req, res) => {
  const expectedUrl = '/admin.html'; // The expected value for X-Original-URL
  if (req.headers.hasOwnProperty('x-original-url') && req.headers['x-original-url'] == expectedUrl) {
    res.status(200).sendFile(path.resolve('./access-granted.html'));
  }else {
    res.status(403).sendFile(path.resolve('./access-denied.html'));}
});

const port = 3003;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
