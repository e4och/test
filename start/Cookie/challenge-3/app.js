const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('./resources')));

app.get('*', (req, res) => {
    res.clearCookie('hh{C00K13S_AR3_FUN!}');
    res.clearCookie('Flag', 'aGhDVEZ7QkFTMzY0XzNOQzBEM0RfQzAwSzEzM30');
    res.cookie('isAdmin', 'False')
    if(req.headers.cookie == "isAdmin=True"){
        res.status(200).sendFile(path.resolve('./resources/admin.html'))
    }else{
        res.status(403).sendFile(path.resolve('./resources/access-denied.html'))
    }
});


const port = 2002;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
