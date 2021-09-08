// load the model file  ie user-defined module like a import in ts file
let courseModel = require('../model/course.model');
const express = require('express');
const path = require('path');

// return all courses
let getAllCourses = (req, res) => {
  courseModel.find({}, (err, data) => {
    if (!err) {
      res.json(data);
    } else {
      res.json(err);
    }
  });
};

let addCourse = (req, res) => {
  let course = req.body;

  courseModel.insertMany(course, (err, result) => {
    if (!err) {
      // res.send('Course added successfully');
      res.redirect('/addCourse.html');
      console.log(result);
    } else {
      res.send(err);
    }
  });
};

let deleteCourse = (req, res) => {
  let pid = req.params.pid;
  console.log(req.params);
  courseModel.deleteOne({ _id: pid }, (err, result) => {
    if (!err) {
      console.log(result);
      res.send(result);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

let updateCourse = (request, res) => {
  let course = request.body;
  console.log(course);
  courseModel.updateOne(
    { _id: course._id },
    { $set: { price: course.price } },
    (err, result) => {
      if (!err) {
        res.redirect('/updateCourse.html');
        console.log(result);
      } else {
        res.send(err);
      }
    }
  );
};

module.exports = {
  getAllCourses,
  addCourse,
  deleteCourse,
  updateCourse,
};
