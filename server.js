const express = require('express'),
      app = express();
app.get('/', (req, res)=>{
    res.status(200).send('AAAA')
})
app.listen(3000, console.log('http://localhost:3000'))