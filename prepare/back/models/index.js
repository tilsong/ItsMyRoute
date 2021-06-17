const Sequelize = require('sequelize');
const admin = require('./admin');
const banner = require('./banner');
const calendar = require('./calendar');
const chat = require('./chat');
const comment = require('./comment');
const myRoute = require('./myRoute');
const myRouteDetail = require('./myRouteDetail');
const myRouteFile = require('./myRouteFile');
const scrap = require('./scrap');
const tag = require('./tag');
const user = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

//시퀄라이즈가 노드와 마이sql 연결, 내부적으로 mysql2를 사용중. 연결 성공 시 sequelize에 연결 정보 들어감
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 나열
db.Admin = admin;
db.Banner = banner;
db.Calendar = calendar;
db.Chat = chat;
db.Comment = comment;
db.MyRoute = myRoute;
db.MyRouteDetail = myRouteDetail
db.MyRouteFile = myRouteFile
db.Scrap = scrap
db.Tag = tag
db.User = user

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
