var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. THis is Jeetu, hahah'); 
  res.end();     //end the response
}).listen(4000); //the server object listens on port 4000
