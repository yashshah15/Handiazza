var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res) {
   res.sendfile('chatting.jsp');
});



user =[];
var si=0;
var fi=0;
io.on('connection', function(socket) {
   
   socket.on('setUsername', function(data) {
      console.log(data);
     user.push(data);
      socket.emit('userSet');
   });
  
  
   
   socket.on('msg', function(data) {
       console.log(data);
       
          var recepient=data.to;
          console.log(data);
          io.sockets.emit(recepient, data);
     
   });
   
});

http.listen(3000, function() {
   console.log('listening on localhost:3000');
});