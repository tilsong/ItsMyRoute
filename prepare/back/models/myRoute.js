module.exports = (sequelize, DataTypes) => {
    const MyRoute = sequelize.define('MyRoute', {
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    MyRoute.associate = (db) => {
        db.MyRoute.belongsTo(db.User);
        db.MyRoute.hasMany(db.Comment);
        db.MyRoute.belongsToMany(db.Scrap, { through: 'MyRouteScrap' });
        db.MyRoute.belongsToMany(db.Calendar, { through: 'MyRouteCalendar' });
        db.MyRoute.belongsToMany(db.MyRouteDetail, { through: 'MyRouteMyRouteDetail'});
        db.MyRoute.belongsToMany(db.MyRouteFile, { through: 'MyRouteMyRouteFile'});
        db.MyRoute.belongsTo(db.Banner, { through: 'MyRouteBanner'});
        db.MyRoute.belongsToMany(db.Tag, { through: 'MyRouteTag'});
        db.MyRoute.belongsTo(db.MyRoute, { as: 'ReviewMyRoute' });
        db.MyRoute.belongsToMany(db.User, { through: 'Like', as: 'Likers'});
    };
    return MyRoute;
}