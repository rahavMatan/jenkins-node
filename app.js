var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello jenkins!!!");
});

app.listen(4000);
console.log('app is listening on port 4000');
