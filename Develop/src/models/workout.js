const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter workout type"
  }, 
  name: {
    type: String,
    trim: true,
    required: "Enter workout name"
  },
  duration: Number,
  distance: Number,
  weight: Number,
  sets: Number,
  resp: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
