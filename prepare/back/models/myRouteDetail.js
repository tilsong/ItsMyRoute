const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class MyRouteDetail extends Model {
  static init(sequelize) {
    return super.init({
        locationValue: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        locationName :{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        routeOrder: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        requiredMoney: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        requiredTime: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
      }, {
            modelName: 'MyRouteDetail',
            tableName: 'myRouteDetails',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.MyRouteDetail.belongsToMany(db.MyRoute, { through: 'MyRouteMyRouteDetail'});
  }
};