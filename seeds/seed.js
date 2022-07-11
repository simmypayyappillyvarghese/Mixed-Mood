const sequelize = require('../config/connection');
const { User,Song,Library } = require('../models');

const userData = require('./userData.json');
//Uncomment once data is added
const songData =require('./songData.json');
const libraryData =require('./libraryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Bulk Create for song data

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