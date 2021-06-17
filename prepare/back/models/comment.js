const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Comment extends Model {
  static init(sequelize) {
    return super.init({
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
      }, {
            modelName: 'Comment',
            tableName: 'comments',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.MyRoute);
  }
};