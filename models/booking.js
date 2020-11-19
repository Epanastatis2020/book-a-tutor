module.exports = function (sequelize, DataTypes) {
    const Booking = sequelize.define('Booking', {
        startTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Booking.associate = function (models) {
        // A Booking can't be created without a Student, Tutor or Subject due to the foreign key constraints
        Booking.belongsTo(models.Student, {
            foreignKey: {
                allowNull: false,
            },
        });
        Booking.belongsTo(models.Tutor, {
            foreignKey: {
                allowNull: false,
            },
        });
        Booking.belongsTo(models.Subject, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Booking;
};
