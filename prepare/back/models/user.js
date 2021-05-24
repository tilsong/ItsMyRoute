module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        socialStatus: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        profile: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    User.associate = (db) => {
        db.User.hasMany(db.MyRoute);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.MyRoute, { through: 'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };
    return User;
}