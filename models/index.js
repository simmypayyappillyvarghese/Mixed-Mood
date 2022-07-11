const User=require('./User');
<<<<<<< feature/search-view-functionality
=======
<<<<<<< HEAD
=======

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
>>>>>>> Develop
const Song=require('./Song');
const Library=require('./Library');



<<<<<<< feature/search-view-functionality
=======
<<<<<<< HEAD
=======

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
>>>>>>> Develop
User.belongsToMany(Song,{

    through:{
  
        model:Library,
    },
    as:'user_song_list'
  });
  
<<<<<<< feature/search-view-functionality

=======
<<<<<<< HEAD

=======
 
>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
>>>>>>> Develop
  
  Song.belongsToMany(User,{
  
    through:{
  
        model:Library,
    },
    as:'song_of_users'
  });

<<<<<<< feature/search-view-functionality
module.exports={User,Song,Library};
=======
<<<<<<< HEAD
module.exports={User,Song,Library};
=======
module.exports={User,Song,Library};

>>>>>>> 067c067fe0bb83370dc13a4e807ae8e24e5953f2
>>>>>>> Develop
