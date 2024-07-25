const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('./resources')));

app.get("*", (req,res) =>{
    res.clearCookie('Flag', 'aGhDVEZ7QkFTMzY0XzNOQzBEM0RfQzAwSzEzM30')
    res.clearCookie('hh{C00K13S_AR3_FUN!}');
    res.cookie('hh{C00K13S_AR3_FUN!}')
    res.status(200).sendFile(path.resolve('./resources/index.html'))
})



const port = 2000
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})


