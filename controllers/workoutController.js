var Workout = require('../models/workout')
var Month = require('../models/month')
const { body,validationResult } = require('express-validator');

var async = require('async');

exports.index = function(req, res) {

  async.parallel({
    workouts: function(callback) {
      Workout.countDocuments({}, callback)
    },
    months: function(callback) {
      Month.countDocuments({}, callback)
    },
  }, function(err, results) {
      res.render('index', {title: 'Muscle Memoir Home', error: err, data: results})
})
}

exports.workout_list = function(req, res, next) {

  Workout.find()
    .exec(function (err, list_workouts) {
      if (err) { return next(err) }

      res.render('workout_list', { title: 'Workout List', workout_list: list_workouts})
    })
}

exports.log_workout_get = function(req, res, next) {
  res.render('log_workout', {title: 'Workout Logger'})
}

exports.log_workout_post = function(req, res, next) {
  pass
}
