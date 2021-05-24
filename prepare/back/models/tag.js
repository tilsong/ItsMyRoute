module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define('Tag', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Tag.associate = (db) => {
        db.Tag.belongsToMany(db.MyRoute, { through: 'MyRouteTag' });
    };
    return Tag;
}