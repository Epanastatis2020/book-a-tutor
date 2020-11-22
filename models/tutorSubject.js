module.exports = function (sequelize, DataTypes) {
    var TutorSubject = sequelize.define(
        'TutorSubject',
        // no fields other than primary key and foriegn keys
        // acts as a link table between tutors and subjects
        {},
        // don't need timestamps on this table
        {
            timestamps: false,
        }
    );

    // link the tutor and subject to this table
    TutorSubject.associate = function (models) {
        TutorSubject.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });

        TutorSubject.belongsTo(models.Subject, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return TutorSubject;
};
