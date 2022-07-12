
const router = require('express').Router();
const {Song, User , Library}=require('../models');
const {Op}=require('sequelize');

let songs;

router.get('/', (req, res) => {

  req.session.logged_in=false;
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login',{logged_in: req.session.logged_in });
    
  });



  router.get('/home',(req,res)=>{

    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('homepage',{logged_in: req.session.logged_in });
  })


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
    songs=searchData.map((data)=>{return data.get({plain:true})});

     res.render('homepage',{songs,logged_in:req.session.logged_in});
  }

  else{
    const error={"message":"No data found"};
    res.render('homepage',{error});
  }
}
catch(e){console.log(e);}

});

//Get Library Data Route

router.get('/home/save',async(req,res)=>{

const userData=await Library.findAll({

  attributes: ['song_id'],
  // include:[{model:Song,through:Library,as:'user_song_list'}],
  //join with Library,grab all song ids from it
  where:{
    user_id:req.session.user_id
  }
})

const songList=userData.map(data=>data.get({plain:true}));
console.log(songList);
if(userData){

  //Should I pass songs as well here ?
  res.render('homepage',{songList,songs}); //array of song ids
}

});



  module.exports = router;