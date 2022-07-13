//Any URL with /api/user will be directed to this page

const router = require('express').Router();
const {User,Library}=require('../../models');

 //SIGN UP ROUTE
 
 // User is created with the email and password passed in the request
 // Set the logged_in flag as true and save it in session

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
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
  
      const validPassword = userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      console.log(userData,userData.id);

      
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          console.log("------------------------------");
          console.log(req.session.logged_in);
          console.log(req.session.user_id);
          // res.json({ user: userData,logged_in: req.session.logged_in,message: 'You are now logged in!' });
          res.status(200).json(userData);
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

 