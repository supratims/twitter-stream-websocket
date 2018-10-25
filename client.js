$(document).ready(function(){

    var $root = $('.js-root');
    var $notice = $('.js-notice');
    var $div = $('.js-message');
   
    const socket = io('http://localhost:8082');
    socket.connect(); 

    // Add a connect listener
    socket.on('connect',function() {
        console.log('Client has connected to the server!');
        $notice.append("Connection established !");
    });

    // Add a connect listener
    socket.on('message',function(data) {
        console.log('Received a message from the server!',data);
        $div.prepend('<p>'+data+'</p>');
    });

    // Add a disconnect listener
    socket.on('disconnect',function() {
        console.log('The client has disconnected!');
        $notice.append("Connection closed");
    });

    // Sends a message to the server via sockets
    function sendMessageToServer(message) {
        socket.send(message);
    }           
});

