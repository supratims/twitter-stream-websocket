var http = require('http'), 
    io = require('socket.io');

var server = http.createServer(function(req, res){ 
    res.writeHead(200,{ 'Content-Type': 'text/html' }); 
    res.end('<h1>My stream!</h1>');
});
server.listen(8082);

var socket = io.listen(server);

socket.on('connection', function(client){ 
    // Success!  Now listen to messages to be received
    client.on('message',function(event){ 
        console.log('Received message from client!',event);
    });
    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
});
