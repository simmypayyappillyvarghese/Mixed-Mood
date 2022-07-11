
const User=require('./User');
const Song=require('./Song');
const Library=require('./Library');


//Add the relation between the tables


User.belongsToMany(Song,{

    through:{
  
        model:Library,
    },
    as:'user_song_list'
  });
  
  // Tags belongToMany Products (through ProductTag)
  
  Song.belongsToMany(User,{
  
    through:{
  
        model:Library,
    },
    as:'song_of_users'
  });

module.exports={User};