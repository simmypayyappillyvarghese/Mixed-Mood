const sequelize = require('../config/connection');
const { User,Song,Library } = require('../models');

const userData = require('./userData.json');
const songData =require('./songData.json');
const libraryData =require('./libraryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    // returning: true,
  });

  //Bulk Create for song data



 //Bulk Create for library data

  process.exit(0);
};

seedDatabase();