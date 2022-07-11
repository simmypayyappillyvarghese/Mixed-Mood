const sequelize = require('../config/connection');
const { User,Song,Library } = require('../models');

const userData = require('./userData.json');
//Uncomment once data is added
<<<<<<< HEAD
 const songData =require('./songData.json');
// const libraryData =require('./libraryData.json');
=======
const songData =require('./songData.json');
const libraryData =require('./libraryData.json');
>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Bulk Create for song data
<<<<<<< HEAD
=======

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
  await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });


 //Bulk Create for library data

 await Library.bulkCreate(libraryData, {
  individualHooks: true,
  returning: true,
});

  process.exit(0);
};

seedDatabase();