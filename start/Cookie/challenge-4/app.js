const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join('./resources')));


app.get('*', (req,res) =>{
    res.clearCookie('isAdmin', 'False');
    res.clearCookie('hh{C00K13S_AR3_FUN!}');
    res.clearCookie('Flag', 'aGhDVEZ7QkFTMzY0XzNOQzBEM0RfQzAwSzEzM30');
    res.clearCookie('Flag');
    res.clearCookie('Year', year)
    res.cookie('Employee', 'True');
    res.cookie('Role', 'notAdmin');
    
    //const test = req.headers.cookie;
    //console.log(test);
    if(req.headers.cookie == "Employee=True; Role=Admin"){
        res.status(200).sendFile(path.resolve('./resources/admin.html'))
    }else{
        res.status(200).sendFile(path.resolve('./resources/access-denied.html'))
    }
})


const port = 2003;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})