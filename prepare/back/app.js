const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRouter = require('./routes/user');
const myRoutesRouter = require('./routes/myRoutes');
const myRouteRouter = require('./routes/myRoute');
const authRouter = require('./routes/auth');
const mapRouter = require('./routes/map');

const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();

const app = express();

db.sequelize.sync()
  .then(() => {
  console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

app.use(morgan('dev'));

var allowedOrigins = ['http://localhost:3000',
                      'https://www.googleapis.com/'];
app.use(cors({
  origin: function(origin, callback){

    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));

app.use(passport.initialize());
app.use(passport.session());

// 라우터 사용
app.use('/user', userRouter);
app.use('/myRoutes', myRoutesRouter);
app.use('/myRoute', myRouteRouter);
app.use('/auth', authRouter);
app.use('/map', mapRouter);

app.listen(3065, () => {
    console.log('서버 실행 중');
});
