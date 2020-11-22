// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');
const { Op } = require('sequelize');

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post('/api/login', passport.authenticate('local'), (req, res) => {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id,
        });
    });

    //   ***************************** USERS ***************************************** //
    // Route for signing up a user. The user's password is automatically hashed and stored securely due to
    // the configuration of the Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post('/api/signup', (req, res) => {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType,
        })
            .then(() => {
                res.redirect(307, '/api/login');
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    // Route for getting some data about our user to be used client side
    app.get('/api/user_data', (req, res) => {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            db.User.findByPk(req.user.id).then((dbUser) => {
                res.status(200).json(dbUser);
            });
        }
    });

    // Route for getting all users who are tutors. Restrict attibutes as we don't want to send password
    app.get('/api/tutors', (req, res) => {
        db.User.findAll({
            attributes: ['id', 'firstName', 'lastName', 'email', 'userType'],
            where: { userType: 'tutor' },
        })
            .then((dbTutors) => {
                res.status(200).json(dbTutors);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    //   ***************************** BOOKINGS ***************************************** //
    // Route for getting all bookings for a given tutor
    app.get('/api/tutorbookings/:id', (req, res) => {
        db.Booking.findAll({
            where: {
                TutorId: req.params.id,
            },
            attributes: ['id', 'startTime', 'endTime', 'notes', 'StudentId'],
            include: [
                { model: db.User, as: 'student', attributes: ['id', 'firstName', 'lastName'] },
                { model: db.Subject, attributes: ['id', 'name'] },
            ],
        })
            .then((dbBookings) => {
                res.status(200).json(dbBookings);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for getting all bookings for a given student
    app.get('/api/studentbookings/:id', (req, res) => {
        db.Booking.findAll({
            where: {
                StudentId: req.params.id,
            },
            attributes: ['id', 'startTime', 'endTime', 'notes', 'StudentId'],
            include: [
                { model: db.User, as: 'tutor', attributes: ['id', 'firstName', 'lastName'] },
                { model: db.Subject, attributes: ['id', 'name'] },
            ],
        })
            .then((dbBookings) => {
                res.status(200).json(dbBookings);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for adding a booking
    app.post('/api/booking', (req, res) => {
        db.Booking.create({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            notes: req.body.notes,
            StudentId: req.body.StudentId,
            TutorId: req.body.TutorId,
            SubjectId: req.body.SubjectId,
        })
            .then((dbBooking) => {
                res.status(200).json(dbBooking);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    //   ***************************** SUBJECTS ***************************************** //
    // Route for getting all subjects
    app.get('/api/subjects', (req, res) => {
        db.Subject.findAll()
            .then((dbSubjects) => {
                res.status(200).json(dbSubjects);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    //   ***************************** TUTOR_SUBJECTS ***************************************** //
    // Route for adding a subject that a tutor tutors
    app.post('/api/tutorsubject', (req, res) => {
        console.log(`Creating tutorsubject: ${JSON.stringify(req.body)}`);
        db.TutorSubject.create({
            SubjectId: req.body.SubjectId,
            UserId: req.body.UserId,
        })
            .then((dbTutorSubject) => {
                res.status(200).json(dbTutorSubject);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for getting all subjects that a tutor tutors
    app.get('/api/tutorsubjects/:id', (req, res) => {
        db.TutorSubject.findAll({
            attributes: ['UserId'],
            where: {
                UserId: req.params.id,
            },
            include: db.Subject,
        })
            .then((dbSubjects) => {
                res.status(200).json(dbSubjects);
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });
};
