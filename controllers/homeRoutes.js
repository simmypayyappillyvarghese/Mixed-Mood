
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


  router.get('/signup',(req,res)=>{

    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }

    res.render('signup',{logged_in: req.session.logged_in });
  })




  module.exports = router;