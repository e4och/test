const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join('./resources')));

app.get("*", (req,res) => {
    res.clearCookie('hh{C00K13S_AR3_FUN!}');
    res.cookie('Flag', 'aGhDVEZ7QkFTMzY0XzNOQzBEM0RfQzAwSzEzM30')
    res.status(200).sendFile(path.resolve('./resources/index.html'))
})


const port = 2001;
app.listen(port, () =>{
    console.log(`Server started at port ${port}`);
})