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
        collate: 'utf_general_ci',
    });
    Banner.associate = (db) => {
        db.Banner.belongsTo(db.User);
        db.Banner.belongsTo(db.MyRoute);
    }
    return Banner;
}