const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class MyRoute extends Model {
  static init(sequelize) {
    return super.init({
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
      }, {
            modelName: 'MyRoute',
            tableName: 'myRoutes',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.MyRoute.belongsTo(db.User);
    db.MyRoute.hasMany(db.Comment);
    db.MyRoute.belongsToMany(db.Scrap, { through: 'MyRouteScrap' });
    db.MyRoute.belongsToMany(db.Calendar, { through: 'MyRouteCalendar' });
    db.MyRoute.belongsToMany(db.MyRouteDetail, { through: 'MyRouteMyRouteDetail'});
    db.MyRoute.belongsToMany(db.MyRouteFile, { through: 'MyRouteMyRouteFile'});
    db.MyRoute.belongsTo(db.Banner, { through: 'MyRouteBanner'});
    db.MyRoute.belongsToMany(db.Tag, { through: 'MyRouteTag'});
    db.MyRoute.belongsTo(db.MyRoute, { as: 'ReviewMyRoute' });
    db.MyRoute.belongsToMany(db.User, { through: 'Like', as: 'Likers'});
  }
};