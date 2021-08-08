 const router = require("express").Router();
 const  Workout = require("../models/workoutModel");


router.get('/api/workouts', (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });


router.get('/api/workouts/range', (req, res) => {
    Workout.find({}) 
    .then(dbWorkouts=> {
      const workouts = dbWorkouts.map(workout => {
        const duration = workout.exercises.reduce((acc, next) => {
          return acc + next.duration;
        }, 0);
        return {
          totalDuration: duration,
          ...workout.toObject()
        }
      })
      res.json(workouts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });

   

router.post('/api/workouts', async (req, res) => {
    try {
    const dbWorkout = await Workout.create(req.body);
      res.json(dbWorkout);
      }catch(error) {
        res.status(500).json(error);
      };
  });


router.put("/api/workouts/:id", async (req, res) => {
   Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }
    })
    .then((response) => {
      res.json(response);
    })
     .catch(err => {
      res.status(500).json(err);
    })
  });


module.exports = router;