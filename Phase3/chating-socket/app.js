let express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
let http = require('http').Server(app);
let io = require('socket.io')(http);
let userName = '';
let favoriteFood = '';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected...');
  socket.on('obj', (msg) => {
    console.log(msg);
    switch (msg[0]) {
      case '1':
        socket.emit('obj', 'Hello!');
        console.log("Serving initial 'Hello'");
        break;
      case 2:
        console.log('Serving second line...');
        socket.emit('obj', "What's your name?");
        break;
      case 3:
        console.log('Serving third line...');
        userName = msg[1];
        socket.emit(
          'obj',
          `Nice to meet you ${userName}!, what is your favorite food?`
        );
        break;
      case 4:
        console.log('Serving fourth line...');
        favoriteFood = msg[1];
        if (favoriteFood.toLowerCase() === 'curry') {
          socket.emit('obj', `My favorite food is also curry!`);
        } else {
          socket.emit(
            'obj',
            `I've never tried ${favoriteFood}, my favorite is curry!`
          );
        }
        break;
    }
  });
});

http.listen(9090, () => console.log('Server running on port number 9090...'));
