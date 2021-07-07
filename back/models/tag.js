const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Tag extends Model {
  static init(sequelize) {
    return super.init({
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
      }, {
            modelName: 'Tag',
            tableName: 'tags',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Tag.belongsToMany(db.MyRoute, { through: 'MyRouteTag' });
  }

};
