module.exports = (sequelize, DataTypes) => {
    const MyRoute = sequelize.define('MyRoute', {
        content: {
            type: DataTypes.Text,
            allowNull: false,
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    MyRoute.associate = (db) => {
        db.MyRoute.belongsTo(db.User);
        db.MyRoute.belongsToMany(db.Tag, { thorough: 'MyRouteTag '});
        db.MyRoute.hasMany(db.Comment);
        db.MyRoute.hasMany(db.MyRouteFile);
        db.MyRoute.belongsToMany(db.User, { thorough: 'Like', as: 'Likers'});
        db.MyRoute.belongsTo(db.MyRoute, { as: 'ReMyRoute'});
        db.MyRoute.hasMany(db.Banner);
    };
    return MyRoute;
}