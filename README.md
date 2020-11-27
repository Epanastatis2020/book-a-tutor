# book-a-tutor
Project 2: designing and building your first full-stack web application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Project Overview](#Project-Overview)
* [User Story](#User-Story)
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Files](#Files)
* [Screenshots](#Screenshots)
* [License](#License)
* [Acknowledgements](#Acknowledgements)
* [Issues](#Issues)
* [Authors](#Authors)

## Project Overview
This app allows teachers and tutors to book sessions with students and keep track of their commitments and learning. Students can log in and view any sessions that have been scheduled with them.

## User Story
### Tutor User Story:
AS An educator
I WANT to be able to manage tutoring sessions with students
SO THAT I am better able to manage my time and learning outcomes

### Student User Story
AS A student
I WANT to see when specific tutors are available
I WANT to be able to filter available tutors by subject
SO THAT I can book a tutoring session

## Link to the App
Please visit the <a href="https://github.com/Epanastatis2020/book-a-tutor.git">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="https://book-a-tutor.herokuapp.com/">Book-A-Tutor </a>application, hosted on Heroku.

## About this project
### **How the app works**
This project uses front end and back end design to create an online tutor booking service. The homepage has options for the user to signup or login. When the signup link is clicked a modal will appear for the tutor/student to enter:
* their first name
* last name
* email address
* password
* User Type (Student or Tutor): if Tutor is chosen then the Select Tutor Subjects field is displayed to allow the tutor to chose which subjects they are qualified to teach/tutor.
###
Once the user has completed the signup form, they can login to the calender page, specific to their user type. This page allows:
* Tutors to see when their Tutoring services are booked
* Students to book a Tutor and view their bookings on a rendered calendar. To make a booking, the user needs to click on the calender at the desired date and time - which will activate a modal that allows them to choose:
* a subject
* a tutor (Tutor names are generated according to their chosen subject area)
* dynamically generated date and time
* a link to the online tutoring session
* any notes from the student to the teacher about the problem
###
Once saved, the tutoring session booking can be clicked on within the calendar to reveal the relevant information (so that it can be edited)

Lastly, the user can logout of the app and be returned to the homepage.

### **How the app was built** 
This app uses MySQL, Node, Express, Handlebars and Sequelize render a CRUD (Create, Read, Update, Delete) application which has the ability to:
###
POST:
* add a new user to the database, identifying them as a Tutor or Student
* add a new booking to the calender (storing the information in the database)
###
GET: 
* getting the information from the database to verify a user's email and password as valid
* view a booking by collecting the information from the database and presenting it to the user
###
PUT:
* edit a booking and save the changes to the database 
###
DELETE:
* discard of a booking for real-time updates of Tutoring Sessions.  
###
This app uses a MVC design pattern where Node and MySQL are used to query and route data in the app. Handlebars is used to generate the HTML using Bootstrap, Google Fonts and Font Awesome to create the aesthetics.

### **How the app was deployed on Heroku** 


### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Heroku](https://www.heroku.com/) to host the site
* **Backend Technology:**
  * [MySQL](https://www.npmjs.com/package/mysql)
  * [Express](https://www.npmjs.com/package/express)
  * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [Express-Session](https://www.npmjs.com/package/express-session)
  * [Nodemon](https://www.npmjs.com/package/nodemon)
  * [Postman](https://www.postman.com/)
  * [passport](https://www.npmjs.com/package/passport)
  * [passport-local](https://www.npmjs.com/package/passport-local)
  * [bycrypt.js](https://www.npmjs.com/package/bcryptjs)
  * [Sequelize](https://www.npmjs.com/package/sequelize)
  * [eslint](https://www.npmjs.com/package/eslint)configurable linter tool
* **Frontend Technology:**
  * HTML
  * CSS
  * [Bootstrap](https://getbootstrap.com/)
  * Javascript
  * [jQuery](https://jquery.com/)
  * [Handlebars](https://www.npmjs.com/package/express-handlebars)
  * [day.js](https://day.js.org/en/)
  * [fullcalender.io](https://fullcalendar.io/)
<br>

## Files
This application consists of the following files:
| File                | Relative Path          |
| ------------------- | ---------------------- |
|server.js | server.js |
| schema.sql | db/schema.sql |
| seedData.sql | db/seedData.sql |


## Screenshots

#### **Walthrough of application**


#### **Screenshot of application**


## Licence
- [MIT License](https://opensource.org/licenses/MIT)
<br>

## Acknowledgements
* The video background was sourced from [Videezy](https://www.videezy.com/).
* [Font Awesome](https://fontawesome.com/) has also been used for the GitHub icons in the contacts page
<br>

## Issues
If you find an issue while using the app or have a request, log the issue or request [ here](https://github.com/Epanastatis2020/book-a-tutor/issues). These will be addressed in a future code update.
<br>
<hr>

## Authors
* **CON ANGELAKIS** <br>
  Contact information:
  con.angelakis@gmail.com <br>
  GitHub link:
  [Epanastatis2020](https://github.com/Epanastatis2020)
  
* **LUKE GALLAGHER** <br>
    Contact information:
    gallagherluke@yahoo.com <br>
    GitHub link:
    [galluk](https://github.com/galluk)
  
* **SARAH RONALD** <br>
  Contact information:
  sareronald@hotmail.com <br>
  GitHub link:
  [sareronald](https://github.com/sareronald)
  
* **ELAHE JAMSHIDI ARAGHI** <br>
    Contact information:
    elijam1608@gmail.com <br>
    GitHub link:
    [Eli-33](https://github.com/Eli-33)
    
