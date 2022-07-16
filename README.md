# Mixed-Mood

## Project Description

Mixed Music is a Node JS web application build using express.JS and sequelize(ORM tool) following MVC paradigm.
Our Music App allows the user to choose the mood and display the songs associated to it.Also it allows the user to 
search for songs based on the artist name.And user can play the song from the playlist and add it to their library.

Application currently have few features which are partially or not implemented like Show Lyrics,
Delete Song from the Library which will be part of the application's future improvements.

<br>

### User Story

As a music lover, I want to be given the option to play my music,based on the mood.

<br>


### Acceptance Criteria

<br>

GIVEN a vibez web application with search options
*   WHEN I sign up/log in THEN I am presented with a homepage with radio button with mood option and search bar to search for the artist name.
*   WHEN I select the mood radio button THEN I am given a suggested playlist based on the mood
*   WHEN I get presented with songs If I don’t like THEN I click a refresh button and get presented with a new playlist 
*   WHEN I search for the songs with artist name THEN I am given a suggested playlist based on artist name
*.  WHEN I am presented with the playlist I Am able to play the songs ,add it to the library and View the lyrics


<br>


ROUTES:

* App Route /Root Route

    http://localhost:3001/         :  Directs the Page to Starting Page of Application with Login Form(If User is not loggedin)

* HOME ROUTE 
    http://localhost:3001/home     :  Directs the Page to Home Page ,When user enter the login button with their credentials.
                                  If user is not logged in direct to the root page woth login form

* SIGN UP ROUTE (POST method)
    http://localhost:3001/signup   :  Directs the Page to SignUp form Page ,When user clicks the signup link in root page
                                

* LOGOUT ROUTE (POST method)

    http://localhost:3001/logout    : Directs the Page to the Root Page with Login Form

* SEARCH ROUTE(GET method)

    http://localhost:3001/search/<searchtext> : Update the homepage with the search result


* Save SONG ROUTE (POST method)

    http://localhost:3001/saveSong : Add the Song to the Library and redirect to home page with song added to library

* MOOD ROUTE(Get method) 

    http://localhost:3001/mood/:moodText : Get the Songs based on the mood text passed in and redirect to home page and 
    display the related songs 


### Technologies/Packages Used

* LANGUAGES/FRAMEWORKS

    * HTML
    * CSS
    * FLEXBOX
    * JAVASCRIPT

* PACKAGES

    * EXPRESS
    * EXPRESS-HANDLEBARS
    * EXPRESS-SESSION
    * CONNECT SESSION SEQUELIZE
    * SEQUELIZE
    * MYSQL2
    * BCRYPT

* New Technology
    * Cloudinary    


<br>

### Links

Heroku Login : https://classique-croissant-67132.herokuapp.com/

Github LInk :https://github.com/Jesus-Villegas/Mixed-Mood

<br>

### Screenshot

Screenshot of homepage after user logs in and select a song to play

<br>


![homepage  screenshot](./public/images/homepage_screenshot.png)

Screenshot of Login form

<br>


![login form screenshot](./public/images/login-form-updated.png)

Screenshot of Signup form


<br>

![sign up form screenshot](./public/images/signup-form.png)



### References

Styling Component Search Bar : https://codepen.io/qkevinto/pen/GZdMrG


