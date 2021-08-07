 const router = require("express").Router();
 const Workout = require("../models/workoutModel.js");

 router.get('/api/workouts', (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

// router.get("/api/workouts/range", (req, res) => {
//     Workout.find({})
//     .then(workouts => {
//         const workouts = workouts.map(workout => {
//             const duration = 
//         })
//         res.json(workouts);
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     });
// });

router.put("/api/workouts/:id", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
         res.json(dbWorkout);
    })
     .catch(err => {
         res.status(500).json(err);
    });
});


module.exports = router;