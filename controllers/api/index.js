const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const searchRoutes = require('./searchRoutes.js');

router.use('/user',userRoutes);
<<<<<<< HEAD
=======
router.use('/search',searchRoutes);
>>>>>>> 8b4f44cc7be18c585cfceaef2d59f6da498dab6b

console.log("In / api");

module.exports = router;