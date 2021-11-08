var http = require('http');
var app  = require('./app')

var httpServer = http.createServer(app);

httpServer.listen(3002,() => {
    console.log(`server started on port ${3002}`);
});