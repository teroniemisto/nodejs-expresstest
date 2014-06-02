var port = process.env.PORT || 8080;

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port);
console.log("Todo Server started! Open http://localhost:" + port + " in your web browser to test locally.");