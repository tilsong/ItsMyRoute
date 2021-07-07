const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Chat extends Model {
  static init(sequelize) {
    return super.init({
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
      }, {
            modelName: 'Chat',
            tableName: 'chats',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.Chat.belongsToMany(db.User, { through: 'UserChat' });
  }

};