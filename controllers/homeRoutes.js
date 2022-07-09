
const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('login');
  });