var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is Jeetu'); //write a response to the client
  res.write('This is another line added to Dockerfile'); 
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
