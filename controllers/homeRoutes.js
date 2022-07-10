
const router = require('express').Router();

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




  module.exports = router;