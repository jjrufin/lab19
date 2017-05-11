var http = require('http');
var facts = require('./facts');


http.createServer(function(request,response){
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.write(facts.iLikeTo[0]+ facts.play[Math.floor(Math.random()*facts.play.length)]);
  response.write(facts.eat[Math.floor(Math.random()*facts.eat.length)]);
  response.end();
}).listen(8080);
