module.exports = (sequelize, DataType) => {
    const Scrap = sequelize.define('Scrap', {
        name: {
            type: DataType.STRING(20),
            allowNull: false,
        },
        detail: {
            type: DataType.STRING(50),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf_general_ci',
    });
    Scrap.associate = (db) => {
        db.Scrap.belongsTo(db.User);
        db.Banner.belongsTo(db.MyRoute);
    }
}