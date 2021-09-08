const mongoose = require('mongoose');

mongoose.pluralize(null);

let courseSchema = mongoose.Schema({
  _id: Number,
  cname: String,
  description: String,
  price: Number,
});

let courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;
