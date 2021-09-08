const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
let routerCourse = require('../backend/router/course.router');

let app = express();

app.use(express.static(__dirname + '/public'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let url = 'mongodb://localhost:27017/tcsmean';

mongoose
  .connect(url)
  .then((res) => console.log('Connnected...'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/course', routerCourse);

app.listen(9090, () => console.log('Server running on port number 9090...'));
