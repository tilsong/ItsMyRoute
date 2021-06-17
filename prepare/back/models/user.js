const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init({
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN(),
            allowNull: true,
        },
        snsId: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        profile: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        provider: {
            type: DataTypes.STRING(30),
            allowNull: true,
        }
      }, {
            modelName: 'User',
            tableName: 'Users',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci', // 한글 저장
            sequelize, //연결 객체
        });
    }
  static associate(db) {
    db.User.hasMany(db.MyRoute);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Chat, { through: 'UserChat' });
    db.User.belongsToMany(db.Scrap, { through: 'UserScrap'});
    db.User.belongsToMany(db.Calendar, { through: 'UserCalendar'});
    db.User.belongsToMany(db.MyRoute, { through: 'Like', as: 'Liked'});
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
  }

};