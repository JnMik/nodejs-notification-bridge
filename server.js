var
  fs = require('fs'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  config = require('./config');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var globalSocket;

console.log('server listening on localhost:' + config.nodeJsListeningPort);

app.get('/status', function (req, res) {
  res.end('ok');
});

app.post('/notification', function (req, res) {
  console.log('Push notification to listeners');
  if(globalSocket) {
    globalSocket.volatile.emit('notification', req.body);
  }
  res.end('ok');
});

var server = app.listen(config.nodeJsListeningPort);

var io = require('socket.io').listen(server);

// Init a socket and emit every POST notification received to it
// Every Web page connecting to this socket should be able to update his interface
io.sockets.on('connection', function(socket) {
  console.log('Init connection with client ');
  globalSocket = socket;
});