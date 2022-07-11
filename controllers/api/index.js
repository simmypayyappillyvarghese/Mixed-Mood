const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const searchRoutes = require('./searchRoutes.js');

router.use('/user',userRoutes);

console.log("In / api");

module.exports = router;