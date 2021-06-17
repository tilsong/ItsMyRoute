const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Admin extends Model {
    static init(sequelize) {
      return super.init({
        email: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
              modelName: 'Admin',
              tableName: 'admins',
              charset: 'utf8mb4',
              collate: 'utf8mb4_general_ci', // 한글 저장
              sequelize, //연결 객체
          });
      }
    static associate(db) {
        db.Admin.belongsToMany(db.Banner, { through: 'AdminBanner'});
    }
};
