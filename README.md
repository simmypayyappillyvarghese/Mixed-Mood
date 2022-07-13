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
*   WHEN I sign up/log in THEN I am presented with a homepage with radio button with mood option.
*   WHEN I select the mood radio button THEN I am given a suggested playlist based on the mood
*   WHEN presented with the playlist  THEN I go through it
*   WHEN I get presented with songs If I don’t like THEN I click a refresh button and get presented with a new playlist 
*   WHEN I do get presented with songs I do like THEN I am able to add it to the library and listen to it and View the lyrics
*   WHEN I want to search up the songs based on artist name, album, genre THEN I will be presented with the related songs 

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

<br>

### Links

<br>

### Screenshot


### References

Styling Component Search Bar : https://codepen.io/qkevinto/pen/GZdMrG


