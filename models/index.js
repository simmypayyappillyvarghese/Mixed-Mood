
const User=require('./User');
const Library=require('./Library')
const Song=require('./Song')
//Add the relation between the tables
Song.belongsToMany(User,{
    through: Library,
  })
Library.hasOne(User)
  
module.exports={User,Library,Song};