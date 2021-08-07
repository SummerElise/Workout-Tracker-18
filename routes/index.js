const router = require("express").Router();
const routes = require('./workoutRoutes');

router.use('/', routes);

module.exports = router;