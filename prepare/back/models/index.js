const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 나열
db.Admin = require('./admin')(sequelize,Sequelize);
db.Banner = require('./banner')(sequelize,Sequelize);
db.Calendar = require('./calendar')(sequelize,Sequelize);
db.Chat = require('./chat')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);
db.MyRoute = require('./myRoute')(sequelize,Sequelize);
db.MyRouteDetail = require('./myRouteDetail')(sequelize,Sequelize);
db.MyRouteFile = require('./myRouteFile')(sequelize,Sequelize);
db.Scrap = require('./scrap')(sequelize,Sequelize);
db.Tag = require('./tag')(sequelize,Sequelize);
db.User = require('./user')(sequelize,Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
