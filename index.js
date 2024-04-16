var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('the code worked this time, a new version'); 
  res.end();     //end the response
}).listen(4000); //the server object listens on port 4000
