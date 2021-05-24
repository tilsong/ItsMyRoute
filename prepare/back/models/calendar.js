module.exports = (sequelize, DataType) => {
    const Calendar = sequelize.define('Calendar', {
        name: {
            type: DataType.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataType.STRING(50),
            allowNull: false,
        },
        calendarDate: {
            type: DataType.DATE,
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf_general_ci',
    });
    Calendar.associate = (db) => {
        db.Calendar.belongsTo(db.User);
        db.Calendar.belongsTo(db.myRouteNum);
    }
}