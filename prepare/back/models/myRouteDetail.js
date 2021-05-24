module.exports = (sequelize, DataType) => {
    const MyRouteDetail = sequelize.define('myRouteDetail', {
        locationValue: {
            type: DataType.STRING(50),
            allowNull: false,
        },
        locationName :{
            type: DataType.STRING(30),
            allowNull: false,
        },
        routeOrder: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        requiredMoney: {
            type: DataType.DOUBLE,
            allowNull: false,
        },
        requiredTime: {
            type: DataType.DATE,
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf_general_ci',
    });
    MyRouteDetail.associate = (db) => {
        db.MyRouteDetail.belongsTo(db.MyRoute);
    }
    return MyRouteDetail;
}