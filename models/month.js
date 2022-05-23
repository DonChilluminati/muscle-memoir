var mongoose = require('mongoose')
const { DateTime } = require("luxon");

var Schema = mongoose.Schema

var MonthSchema = new Schema({
  month: Number,
  workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout', required: true }], //reference to the associated workouts
})

MonthSchema
.virtual('url')
.get(function() {
  return '/months/' + this._id
})

MonthSchema
.virtual('month_name')
.get(function() {
  if (this.month == 1){
    return 'January'}
  if (this.month == 2){
    return 'February'}
  if (this.month == 3){
    return 'March'}
  if (this.month == 4){
    return 'April'}
  if (this.month == 5){
    return 'May'}
  if (this.month == 6){
    return 'June'}
  if (this.month == 7){
    return 'July'}
  if (this.month == 8){
    return 'August'}
  if (this.month == 9){
    return 'September'}
  if (this.month == 10){
    return 'October'}
  if (this.month == 11){
    return 'November'}
  if (this.month == 12){
    return 'December'}
  else {
    return null}
})

module.exports = mongoose.model('Month', MonthSchema)
