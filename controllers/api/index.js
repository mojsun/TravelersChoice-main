const router = require('express').Router();

const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');

router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;
