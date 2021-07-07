const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Banner extends Model {
  static init(sequelize) {
    return super.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        deadlineDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
      }, {
            modelName: 'Banner',
            tableName: 'banners',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Banner.belongsToMany(db.Admin, { through: 'AdminBanner'});
    db.Banner.belongsToMany(db.MyRoute, { through: 'MyRouteBanner'});
  }

};