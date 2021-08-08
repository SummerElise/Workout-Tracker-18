const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      
    exercises: [{

    name: {
        type: String,
        required: "Name of workout is required."
      },
    workoutType: {
        type: String,
        required: "Type of workout is required."
    },
    weight: {
        type: Number,
      },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
      },
    duration: {
        type: Number,
        required: true,
    },
    distance: {
      type: Number,
     
    }
  }]
});






const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;