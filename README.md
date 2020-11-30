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
<br>

## Project Overview
This app allows **Students** to book sessions with tutors within a specific subject area for online academic support. It allows **Tutors** to view their bookings and keep track of their commitments and the learning of their students. Students can log in and view any sessions they have scheduled on a particular day/across a week.
<br>

## User Story
### TUTOR User Story:
AS An educator
I WANT to be able to manage tutoring sessions with students
SO THAT I am better able to manage my time and student learning outcomes

### STUDENT User Story
AS A student
I WANT to be able to filter available tutors by subject
SO THAT I can book a tutoring session at a specific date/time for academic support
<br>

## Link to the App
Please visit the <a href="https://github.com/Epanastatis2020/book-a-tutor.git">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="https://book-a-tutor.herokuapp.com/">Book-A-Tutor </a>application, hosted on Heroku.
<br>

## About this project
### **How the app works**
This project uses front end and back end design to create an online tutor booking service. The homepage has options for the user to signup or login. When the signup link is clicked a modal will appear for the tutor/student to enter:
* their first name
* last name
* email address
* password
* User Type (Student or Tutor): if Tutor is chosen then the Select Tutor Subjects field is displayed to allow the tutor to chose which subjects they are qualified to teach/tutor.
<br>
Once the user has completed the signup form, they can login to the calendar page, specific to their user type. This page allows:
* Tutors to see when their Tutoring services are booked
* Students can book a Tutor and view their bookings on a rendered calendar. To make a booking, the user needs to click on the calendar at the desired date and time - which will activate a modal that allows them to choose:
* a subject
* a tutor (Tutor names are generated according to their chosen subject area)
* dynamically generated date and time
* a link to the online tutoring session
* any notes from the student to the teacher about the problem
<br>
Once saved, the tutoring session booking can be clicked on within the calendar to reveal the relevant information (so that it can be edited)

Lastly, the user can logout of the app and be returned to the homepage.
<br>
### **How the app was built** 
This app uses MySQL, Node, Express, Handlebars and Sequelize render a CRUD (Create, Read, Update, Delete) application which has the ability to:
###
POST:
* add a new user to the database, identifying them as a Tutor or Student
* add a new booking to the calendar (storing the information in the database)
###
GET: 
* getting the information from the database to verify a user's email and password as valid
* view a booking by collecting the information from the database and presenting it to the user
###
PUT:
* edit a booking and save the changes to the database 
* drag and drop the tutoring session to a different date and time on the calendar
###
DELETE:
* discard of a booking for real-time updates of Tutoring Sessions.  
###
This app uses a MVC design pattern where Node and MySQL are used to query and route data in the app. Handlebars is used to generate the HTML using Bootstrap, Google Fonts and Font Awesome to create the aesthetics.
<br>

### **Video of the app in use** 
* JawsDB add-on provides a fully functional MySQL Database server for use with the Heroku application. A recording of the app's functionality can be viewed [here]()*.
<br>

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Travis CI](https://travis-ci.org/) to test the code
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
  * [fullcalendar.io](https://fullcalendar.io/) 
<br>

## Screenshots and quick Walkthrough

#### **Walthrough of application**
![walkthrough-bookatutor](https://user-images.githubusercontent.com/67722377/100559829-06192c00-3308-11eb-8880-247c81c2ece2.gif)

To see a more indepth video of the app please click [here](#Video-of-the-app-in-use) to go up to **Video of the app in use** above.

#### **Screenshot of application**
#### **Landing Page** 
![landing-page](https://user-images.githubusercontent.com/67722377/100535366-635f9f80-326c-11eb-8e50-4d7b30ead217.png)

#### Information about Book-A-Tutor (underneath the landing page video)
![info](https://user-images.githubusercontent.com/67722377/100535490-9191af00-326d-11eb-903f-80d33326831d.png)

#### Contacts 
![contact](https://user-images.githubusercontent.com/67722377/100535510-c0a82080-326d-11eb-8c4c-a33fbccc45f2.png)

#### **Members Page** (with Calendar view)
The Members page looks similar for Student and Tutor - however their functionality works differently, which can be seen a little more clearly in the walkthrough video provided above. This is a student view, where the student has two current bookings.
![members-page](https://user-images.githubusercontent.com/67722377/100541016-2f4ca480-3295-11eb-8c42-40572fd60ea4.png)
<br>

## Licence
- [MIT License](https://opensource.org/licenses/MIT)
<br>

## Acknowledgements
* The video background was sourced from [Videezy](https://www.videezy.com/).
* [Font Awesome](https://fontawesome.com/) has also been used for the GitHub icons in the contacts page.
* [Shutterstock](https://www.shutterstock.com/home) has been used to source the brain 'logo' at the top of the members page.
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
    
