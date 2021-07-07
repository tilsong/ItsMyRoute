const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Scrap extends Model {
  static init(sequelize) {
    return super.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
      }, {
            modelName: 'Scrap',
            tableName: 'scraps',
            charset: 'utf8',
            collate: 'utf8_general_ci',
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Scrap.belongsToMany(db.User, { through: 'MyRouteScrap' });
  }

};