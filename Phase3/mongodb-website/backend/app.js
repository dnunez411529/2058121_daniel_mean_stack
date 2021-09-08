const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
let routerCourse = require('./router/course.router');

let app = express();

app.use(cors());
app.use(bodyParser.json());

let url = 'mongodb://localhost:27017/tcsmean';

mongoose
  .connect(url)
  .then((res) => console.log('Connnected...'))
  .catch((err) => console.log(err));

app.use('/api/course', routerCourse);

app.listen(9090, () => console.log('Server running on port 9090...'));
