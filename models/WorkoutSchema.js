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

workoutSchema.virtual("totalDuration").get(function(){
  let totalDuration = 0;
  this.exercises.forEach(excercise => {
    totalDuration += exercise.duration
  });
  return totalDuration;
});
    
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;