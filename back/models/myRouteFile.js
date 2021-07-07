const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class MyRouteFile extends Model {
  static init(sequelize) {
    return super.init({
        src:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
      }, {
            modelName: 'MyRouteFile',
            tableName: 'myRouteFiles',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.MyRouteFile.belongsToMany(db.MyRoute, { through: 'MyRouteMyRouteFile'});
  }

};
