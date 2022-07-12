
const router = require('express').Router();
const {Song, User}=require('../models');
const {Op}=require('sequelize');

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
   const songs=searchData.map((data)=>{return data.get({plain:true})});

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

router.get('/save',async(req,res)=>{

const userData=await User.findAll({

  attributes: [song_id],
  where:{
    user_id:req.session.user_id
  }
})

const data=userData.map(data=>data.get({plain:true}));
if(userData){

  res.render('homepage',{songs,logged_in:req.session.logged_in,data});
}

});



  module.exports = router;