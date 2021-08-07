const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
      
    exercises: [{

    name: {
        type: String,
        trim: true,
        required: "Name of workout is required."
      },
    workoutType: {
        type: String,
        trim: true,
        required: "Type of workout is required."
    },
    weight: {
        type: Number,
        trim: true,
      },
    sets: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
      },
    duration: {
        type: Number,
        trim: true,
        required: "Enter the duration of the exercise."
    },
    }]
});






const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;