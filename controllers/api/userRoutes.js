const router = require('express').Router();
const {User,Library}=require('../../models');

 //On route /signup,user will user will be created  with the passed email and password

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(res.status);
      res.status(200).json(userData);
    });

   
  } catch (err) {
    res.status(400).json(err);
  }
});



router.post('/login', async (req, res) => {

    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData,logged_in: req.session.logged_in,message: 'You are now logged in!' });
      });
      
     
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  router.post('/saveSong',async(req,res)=>{

    try{
  //   console.log(req.body);
  //   res.status(200).json();
  //  console.log(req.session.user_id)

   const data={
    "user_id":req.session.user_id,
    "song_id":req.body.songId
   };

   const libraryData=await Library.create(data);

   console.log("user route",libraryData);
   if(libraryData){

     res.status(200).json({message:"Added the Song to the Library"});
    
   }
   
    }
    catch(e){
      console.log(e);
      res.status(500).json({message:"Failed to Save the Song"});
    }
  })

  module.exports=router;

 