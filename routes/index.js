var express = require('express');
var router = express.Router();

// CONTROLLERS: //
var workout_controller = require('../controllers/workoutController')
var month_controller = require('../controllers/monthController')

/// USER ROUTES: ///

// GET Home Page -- Future landing/account creation page? (Like Facebook)
//                    Until then, possible test page
router.get('/', workout_controller.index)

router.get('/workouts/', workout_controller.workout_list)

router.get('/workouts/log_workout', workout_controller.log_workout_get)

router.post('/workouts/log_workout', workout_controller.log_workout_post)

module.exports = router;
