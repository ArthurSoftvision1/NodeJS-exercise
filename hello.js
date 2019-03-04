var http = require('http');

http.createServer(function (req, res) {
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log("...Incoming Request: " + req.url);
        return res.end();
    });
}).listen(8080);

console.log("Server Listening on Port 8080..");
