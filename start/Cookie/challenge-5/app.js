const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join('./resources')));


app.get('*', (req,res) => {
    res.clearCookie('isAdmin', 'False');
    res.clearCookie('hh{C00K13S_AR3_FUN!}');
    res.clearCookie('Flag', 'aGhDVEZ7QkFTMzY0XzNOQzBEM0RfQzAwSzEzM30');
    res.clearCookie('Flag');
    res.clearCookie('Employee');
    res.clearCookie('Role');
    res.clearCookie('Year');

    let year = new Date(Date.now());
    year = year.getFullYear()
    res.cookie('Year', year)
    console.log()
    if(req.headers.cookie.slice(5,9) >= 2020){
        res.status(403).sendFile(path.resolve('./resources/too-late.html'))
    }else if(req.headers.cookie.slice(5,9) <= 2018){
                res.status(403).sendFile(path.resolve('./resources/too-early.html'));
    }else{
        res.status(200).sendFile(path.resolve('./resources/access.html'))
    }
})

const port = 2004;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
})