
const User=require('./User');
const Song=require('./Song');
const Library=require('./Library');



User.belongsToMany(Song,{

    through:{
  
        model:Library,
    },
    as:'user_song_list'
  });
  

  
  Song.belongsToMany(User,{
  
    through:{
  
        model:Library,
    },
    as:'song_of_users'
  });

module.exports={User,Song,Library};