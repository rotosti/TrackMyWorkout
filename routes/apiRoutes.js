const router = require('express').Router();
const database = require('../models');

router.get('/api/workouts', (req, res) => {
    database.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get('/api/workouts/range', (req, res) => {
    database.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post('/api/workouts', (req, res) => {
    database.Workout.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

router.put('/api/workouts/:id', (req, res) => {
    database.Workout.findByIdAndUpdate(req.params.id, {$push: { exercises:req.body }})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

module.exports = router;