const express = require('express'),

app = express();

app.get('/',(req, res)=>{
  res.send(‘Hello world’);
});

//Binding the server to a port(3000)
app.listen(4000,() => console.log(‘express server started at port 4000’));
