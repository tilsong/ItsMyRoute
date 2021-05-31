module.exports = (sequelize, DataType) => {
    const Banner = sequelize.define('Banner', {
        name: {
            type: DataType.STRING(20),
            allowNull: false,
        },
        deadlineDate: {
            type: DataType.DATE,
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Banner.associate = (db) => {
        db.Banner.belongsToMany(db.Admin, { through: 'AdminBanner'});
        db.Banner.belongsToMany(db.MyRoute, { through: 'MyRouteBanner'});
    }
    return Banner;
}