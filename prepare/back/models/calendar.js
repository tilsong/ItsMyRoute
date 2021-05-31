module.exports = (sequelize, DataType) => {
    const Calendar = sequelize.define('Calendar', {
        name: {
            type: DataType.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataType.STRING(50),
            allowNull: true,
        },
        calendarDate: {
            type: DataType.DATE,
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Calendar.associate = (db) => {
        db.Calendar.belongsToMany(db.User, { through: 'UserCalendar'});
        db.Calendar.belongsToMany(db.MyRoute, { through: 'MyRouteCalendar'});
    }
    
    return Calendar;
}