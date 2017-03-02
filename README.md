This application was meant to relay some backend data (PHP, python, anything..)
to a web interface instantly and refreshless via socket.
POST on /notification route are forwarded on socket directly.

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

#### Try the notification bridge with Postman or cURL running some POST call on /notification route ####
$ curl -H "Content-Type: application/json" -X POST -d '{"warning":"investigate X"}' http://localhost:8000/notification