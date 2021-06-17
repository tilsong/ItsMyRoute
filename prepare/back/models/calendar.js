const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Calendar extends Model {
  static init(sequelize) {
    return super.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        calendarDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
      }, {
            modelName: 'Calendar',
            tableName: 'calendars',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Calendar.belongsToMany(db.User, { through: 'UserCalendar'});
    db.Calendar.belongsToMany(db.MyRoute, { through: 'MyRouteCalendar'});
  }

};
