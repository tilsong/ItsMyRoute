module.exports = (sequelize, DataTypes) => {
    const MyRouteDetail = sequelize.define('MyRouteDetail', {
        locationValue: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        locationName :{
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        routeOrder: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        requiredMoney: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        requiredTime: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    MyRouteDetail.associate = (db) => {
        db.MyRouteDetail.belongsToMany(db.MyRoute, { through: 'MyRouteMyRouteDetail'});
    }
    return MyRouteDetail;
}