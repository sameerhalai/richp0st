var http = require("http");

var giraffe = 0;

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World3"+giraffe++);
	response.end();
}).listen(8888);

console.log("Server has started.");