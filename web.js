var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    var helloOutput = fs.readFile('index.html');
    var fs = require('fs');
    var buf = new Buffer(fs.readFileSync('file.html'), 'utf-8');
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
