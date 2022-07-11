
const router = require('express').Router();
const {Song}=require('../models');

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

  router.get('/search/:searchText',async(req,res)=>{

    try{

      const searchValue=req.params.searchText;
  
   
  const searchData=await Song.findAll({
      attributes:['media_url'],
      where:{
          artist_name:searchValue
      }
  });

  console.log(searchData);

  //Serializing the Search Data
  const songs=searchData.map((data)=>{return data.get({plain:true})});

  console.log(songs);
  // if(searchData){
     
    
     res.render('homepage',{songs});
  // }
  // else{
  // res.status(400).json({message:"Failed to fetch the data"});
  // }
}
catch(e){console.log(e);}

});







  module.exports = router;