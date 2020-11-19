module.exports = function (sequelize, DataTypes) {
    const TutorSubject = sequelize.define('TutorSubject', {
        // no fields other than primary key and foriegn keys
        // acts as a link table between tutors and subjects
    });

    // link the tutor and subject to this table
    TutorSubject.associate = function (models) {
        TutorSubject.belongsTo(models.Tutor, {
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
