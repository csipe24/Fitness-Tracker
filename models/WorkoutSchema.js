const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required : "Please enter a workout type"
          },
          name: {
            type: String,
            trim: true,
            required : "Please provide a workout name"
          },
          duration: {
            type: String,
            trim: true,
            required : "Please provide a workout duration"
          },
          weight: Number,
          reps: Number,
          sets: Number,
          distance: Number
          }
      ]
    });
    
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;