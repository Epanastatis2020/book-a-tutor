module.exports = function (sequelize, DataTypes) {
    var Subject = sequelize.define("Subject", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Subject.associate = function (models) {
        // Associating Subject with TutorSubjects
        // When a Subject is deleted, also delete any associated TutorSubjects
        Subject.hasMany(models.TutorSubject, {
            onDelete: "cascade"
        });
        // Associating Subject with Bookings
        // When an Subject is deleted, also delete any associated Bookings
        Subject.hasMany(models.Booking, {
            onDelete: "cascade"
        });
    };


    return Subject;
};