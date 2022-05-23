var mongoose = require('mongoose')
const { DateTime } = require("luxon");

var Schema = mongoose.Schema

var WorkoutSchema = new Schema({
  date: Date,
  month: {type: Schema.Types.ObjectId, ref: 'Month', required: true},
  type: String,
  duration_in_minutes: Number,
  exercises:
  [
    {
      exercise_name: String,
      weight: Number,
      rpe: Number,
    }
  ],
  notes: String
})

WorkoutSchema
.virtual('url')
.get(function() {
  return '/workouts/' + this._id
})

WorkoutSchema
.virtual('date_formatted')
.get(function() {
  return DateTime.fromJSDate(this.date).toLocaleString();
})

WorkoutSchema
.virtual('month_number')
.get(function() {
  return DateTime.local(this.date).month
})

module.exports = mongoose.model('Workout', WorkoutSchema)
