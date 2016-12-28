// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();
// var path = require('path')

var jsonData = {count: 12, message: 'hey'};

var fs = require('fs');



app.get('/', function(req, res) {
  //Using node fs library
  fs.readFile('index.html', function(err, buffer){
    var html = buffer.toString();

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });

  // Using Express sendFile method to do the above
  // res.sendFile(__dirname + '/index.html');
});

app.get('/data', function(req, res) {
  res.json(jsonData);
});


app.listen(3000);
