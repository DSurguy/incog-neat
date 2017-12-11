const express = require('express');
var bodyParser = require('body-parser');

var app = express();

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res){
  res.sendFile(__dirname+'/index.html');
});

app.listen(8888);
console.log('Server listening on http://localhost:8888');