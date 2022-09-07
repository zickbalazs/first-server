const express = require('express'),
      path = require('path'),
      app = express();
path.dirname(path.join(__dirname, './'))
//CSS Mappa feldolgozása
app.use('/css', express.static(path.join(__dirname, './css')));
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"./index.html"));
});
app.get('/users', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"./users.html"));
});
app.get('/contacts', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"contacts.html"));
});
app.post('/api/message', (req,res)=>{
    console.log(req.body);
    res.status(200).sendFile(path.join(__dirname,"./thx.html"));
})
app.listen(3000, console.log('http://localhost:3000'));