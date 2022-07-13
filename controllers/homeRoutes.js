
const router = require('express').Router();
const {Song, User , Library}=require('../models');
const {Op}=require('sequelize');



router.get('/', (req, res) => {

  req.session.logged_in=false;
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login',{logged_in: req.session.logged_in });
    
  });



  //Application will be routed when the user clicks on the signup link

  router.get('/signup',(req,res)=>{

    //If user is  logged in redirect to /home
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }

    //If user is  not logged in render signup
    res.render('signup',{logged_in: req.session.logged_in });
  })


  //SEARCH ROUTE-Based on the Artist Name

  router.get('/search/:searchText',async(req,res)=>{

    try{

      const searchValue=req.params.searchText;
  
  const searchData=await Song.findAll({
      attributes:['id','song_title','album_name','artist_name','media_url','media_image'],
      where:{
          artist_name:
          {
            [Op.like]:`%${searchValue}%`
          }
        }
  });


  
  if(searchData){

  //Serializing the Search Data
    const songs=searchData.map((data)=>{return data.get({plain:true})});
     req.session.save(()=>{

      req.session.songs=songs
      res.render('homepage',{songs,logged_in:req.session.logged_in,parsedSongList:req.session.playlist});
     });
     
  }

  else{
    const error={"message":"No data found"};
    res.render('homepage',{error});
  }
}
catch(e){console.log(e);}

});

//Get all the Song data based on the user id logged in by joining with the through table Library

router.get('/home',async(req,res)=>{

  console.log("Session loggedin",req.session.logged_in);
const userData=await User.findAll({
  include:[{
    model:Song,
    through:Library,
    as:'user_song_list',
    attributes:['id','artist_name','album_name','media_image','song_title','media_url'] 
  } 
  ],
  where:{
    id:req.session.user_id
  }
});


// console.log("----------------------------");
// console.log(userData);

 const songList=userData.map((data)=>data.get({plain:true}));


// console.log("-----------------------------");


// console.log(songList);
// console.log(songList[0].user_song_list);
 const parsedSongList=songList[0].user_song_list;
// let isSaved;

//TO VERIFY 

console.log(parsedSongList);




// console.log(req.session.songs);
if(userData){
  
  if(req.session.songs){
    for(let i=0;i<req.session.songs.length;i++){
  
      parsedSongList.forEach(librarySong=>{
    
        if(librarySong.id==req.session.songs[i].id){
    
          req.session.songs[i].disabled='disabled';
        }
    
      })
    }
  }

  req.session.save(()=>{
    req.session.playlist=parsedSongList
    

        res.render('homepage',{logged_in:req.session.logged_in,songs:req.session.songs,parsedSongList}); 
  });
  
}

});

//Mood Route
router.get('/mood/:moodText',async(req,res)=>{

  try{

    const searchValue=req.params.moodText;

const searchData=await Song.findAll({
    attributes:['id','song_title','album_name','artist_name','media_url','media_image'],
    where:{
          mood:searchValue
        }
      
});


if(searchData){

//Serializing the Search Data
  const songs=searchData.map((data)=>{return data.get({plain:true})});

   res.render('homepage',{songs,logged_in:req.session.logged_in,parsedSongList:req.session.playlist});
}

else{
  const error={"message":"No data found"};
  res.render('homepage',{error});
}
}
catch(e){console.log(e);}

});


  module.exports = router;