const express = require('express');

let router = express.Router();
let courseController = require('../controller/course.controller');

router.get('/getAllCourses', courseController.getAllCourses);
router.post('/addCourse', courseController.addCourse);
router.delete('/deleteCourse/:pid', courseController.deleteCourse);
router.post('/updateCourse', courseController.updateCourse);

module.exports = router;
