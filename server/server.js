var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var data = require('./data.json');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('../client'));


app.get('/flights', function (req, res) {
  res.send(data);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
