var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(message){

  	io.emit('chat message', message);
  	console.log(`Message: ${message}`)
  	
  })
  socket.on('disconnect', function(){
  	console.log('Disconnected user')
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});