const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            name: String,
            sets: Number,
            reps: Number,
            weight: Number,
            duration: Number,
            distance: Number,
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;