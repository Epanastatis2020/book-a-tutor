module.exports = function (sequelize, DataTypes) {
    const Subject = sequelize.define(
        'Subject',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { len: [1] },
            },
        },
        // don't need timestamps on this table
        {
            timestamps: false,
        }
    );

    Subject.associate = function (models) {
        // Associating Subject with TutorSubjects
        // When a Subject is deleted, also delete any associated TutorSubjects
        Subject.hasMany(models.TutorSubject, {
            onDelete: 'cascade',
        });
        // Associating Subject with Bookings
        // When an Subject is deleted, also delete any associated Bookings
        Subject.hasMany(models.Booking, {
            onDelete: 'cascade',
        });
    };

    return Subject;
};
