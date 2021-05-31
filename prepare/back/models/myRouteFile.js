module.exports = (sequelize, DataTypes) => {
    const MyRouteFile = sequelize.define('MyRouteFile', {
        src:{
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    MyRouteFile.associate = (db) => {
        db.MyRouteFile.belongsToMany(db.MyRoute, { through: 'MyRouteMyRouteFile'});
    };
    return MyRouteFile;
}