var http = require('http');
http.createServer(function (req, res) {
  var jsonData = "";
  req.on('data', function (chunk) {
    jsonData += chunk;
  });
  req.on('end', function () {
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.end(jsonData);
/*    var reqObj = JSON.parse(jsonData);
    var resObj = {
      message: "Hello " + reqObj.name,
      question: "Are you a good " + reqObj.occupation + "?"
    };
    res.writeHead(200);
    res.end(JSON.stringify(resObj));*/
  });
}).listen(8080);