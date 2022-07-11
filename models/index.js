const User=require('./User');
<<<<<<< HEAD
=======

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
const Song=require('./Song');
const Library=require('./Library');



<<<<<<< HEAD
=======

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
User.belongsToMany(Song,{

    through:{
  
        model:Library,
    },
    as:'user_song_list'
  });
  
<<<<<<< HEAD

=======
 
>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
  
  Song.belongsToMany(User,{
  
    through:{
  
        model:Library,
    },
    as:'song_of_users'
  });

<<<<<<< HEAD
module.exports={User,Song,Library};
=======
module.exports={User,Song,Library};

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
