# Mixed-Mood


## Project Description

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

App Route /Root Route

http://localhost:3001/         :  Directs the Page to Starting Page of Application with Login Form
http://localhost:3001/home     :  Directs the Page to Home Page ,When user enter the login button with their credentials.
                                  If user is not logged in direct to the root page woth login form

http://localhost:3001/signup   :  Directs the Page to SignUp form Page ,When user clicks the signup link in root page(http://localhost:3001/ )
http://localhost:3001/signup   :  If User enter credential and enter Submit Button ,Directs the Page to Home Page(http://localhost:3001/home) wih logout button
                                

http://localhost:3001/search/<searchtext> : Update the homepage with the search result

# Test 
### Technologies/Packages Used


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
