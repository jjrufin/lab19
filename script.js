var express = require('express');
var app = express();
var facts = require('./facts')
// var play = ['video games ', 'basketball ', 'hopscotch ', 'hide and seek ', 'tag ', 'twister '];
// var eat = ['tacos', 'shake shack', 'krispy kreme'];


// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send((facts.eat[Math.floor(Math.random()*facts.eat.length)]));
});

app.get('/play', function (req, res) {
  res.send(facts.play);
});


var server = app.listen(3000, function () {
var port = server.address().port;
console.log('Example app listening at http://localhost:%s', port);
});
