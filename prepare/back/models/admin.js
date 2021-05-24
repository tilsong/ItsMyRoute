module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        email: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Admin.associate = (db) => {
        db.Admin.hasMany(db.Banner);
    }
    return Admin;
}