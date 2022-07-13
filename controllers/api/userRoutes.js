//Any URL with /api/user will be directed to this page

const router = require("express").Router();
const { User, Library } = require("../../models");

//SIGN UP ROUTE

/*User is created with the email and password passed in the request
  Set the logged_in flag as true and save it in session
 And send succesful response or catch the error and send it*/

router.post("/signup", async (req, res) => {
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

//LOGIN ROUTE

/* Get the user data from the table using the email id
Verify the password with existing one for the user
If Valid,save the session with user id and loggin id and return userdata */

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //Validate the password with saved in databse
    const validPassword = userData.checkPassword(req.body.password);

    //If Password is not valid send failed response
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({
        user: userData,
        logged_in: req.session.logged_in,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGOUT ROUTE

/*
  Destroy the session for the user,if user is logged in
  */

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Save SONG ROUTE

/*
  Created the Library data with user id(from session) and song id passed in the request
  If succesfully created the library data passe the response else the error.
 */

router.post("/saveSong", async (req, res) => {
  try {
    const data = {
      user_id: req.session.user_id,
      song_id: req.body.songId,
    };

    const libraryData = await Library.create(data);
    if (libraryData) {
      res.status(200).json({ message: "Added the Song to the Library" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Failed to Save the Song" });
  }
});

module.exports = router;
