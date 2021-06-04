const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, MyRoute } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

// loadMyInfo
router.get('/', async (req, res, next) => { // GET /user
    try {
      if (req.user) {
        const fullUserWithoutPassword = await User.findOne({
          where: { id: req.user.id },
          attributes: {
            exclude: ['password']
          },
          include: [{
            model: MyRoute,
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          }]
        })
        res.status(200).json(fullUserWithoutPassword);
      } else {
        res.status(200).json(null);
      }
    } catch (error) {
      console.error(error);
      next(error);
  }
});

// logInAPI
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: MyRoute,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

// logOutAPI
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

// signUpAPI
router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
  try {
    console.log('1234');
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    console.log('2345');
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    console.log(req.body.nickname);
    await User.create({
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      name: req.body.name,
      nickname: req.body.nickname,
      password: hashedPassword,
      active: true,
    });
    console.log(req.body.nickname);
    res.status(201).send('ko');
  } catch (error) {
    console.error(error);
    next(error); // status 500
  }
});

module.exports = router;