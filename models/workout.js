const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Workout type is required'
        },
        name: {
            type: String,
            trim: true,
            required: 'Workout name is required'
        },
        duration: {
            type: Number,
            required: 'Workout duration is required'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = Mongoose.model('workout', WorkoutSchema);
module.exports = Workout;