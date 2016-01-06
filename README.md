
#### Init project ####
    $ cp config.js.dist config.js

#### Start nodejs notification bridge server ####
    $ node server.js

#### Usage on client side ####
    <script src="https://cdn.socket.io/socket.io-1.3.7.js"></script>
    <script>
      // creating a new websocket
      var socket = io.connect('http://localhost:8000/');

      socket.on('notification', function (data) {
          console.log(data);
      });
    </script>

#### Try the notification bridge with Postman running some POST http call ####