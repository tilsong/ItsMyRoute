const express = require('express');
const { Op } = require('sequelize');
const { MyRoute, User, MyRouteFile, MyRouteDetail, Comment, Tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /posts
    try {
      const where = {};
      if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const myRoutes = await MyRoute.findAll({
        where,
        limit: 10,
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profile'],
        }, {
          model: MyRouteDetail,
        }, {
          model: MyRouteFile,
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname', 'profile'],
          }],
        },{
          model: Tag,
          attributes: ['name'],
        }],
      });
      res.status(200).json(myRoutes);
    } catch (error) {
      console.error(error);
      next(error);
    }
});

router.get('/todayMyRoute', async (req, res, next) => {
  try {

    const myRoutes = await MyRoute.findAll({
      // 임시 처방임^^
      offset: 0,
      limit: 4,
        order: [
          ['createdAt', 'ASC'],
        ],
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: MyRouteDetail,
        }, {
          model: MyRouteFile,
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id'],
          }],
        },],
        });
      res.status(200).json(myRoutes);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  router.get('/userMyRoute', async (req, res, next) => { // GET /posts
    try {
      const where = { UserId: req.user.id };
      const userMyRoute = await MyRoute.findAll({
        where,
        limit: 10,
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: MyRouteDetail,
        }, {
          model: MyRouteFile,
        }, {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id'],
          }],
        },],
      });
      res.status(200).json(userMyRoute);
    } catch (error) {
      console.error(error);
      next(error);
    }
});

router.get('/:userId', async (req, res, next) => { // GET /posts
  try {
    const where = { UserId: req.params.userId };
    const otherUserMyRoute = await MyRoute.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
      ],
      include: [{
        model: MyRouteDetail,
      }, {
        model: MyRouteFile,
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id'],
        }],
      },],
    });
    res.status(200).json(otherUserMyRoute);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/location', async (req, res, next) => {
  try {
    let localName = null;
    
    if (req.body.locationGu) {
      console.log(req.body.locationGu);
      localName = req.body.locationGu;
    } else {
      console.log(req.body.locationDong);
      localName = req.body.locationDong;
    }
  
    const myRoutes = await MyRoute.findAll({
      where: {routeLocalName: {[Op.like]: '%' + localName + '%'}},
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'profile'],
      }, {
        model: MyRouteDetail,
      }, {
        model: MyRouteFile,
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname', 'profile'],
        }],
      },{
        model: Tag,
        attributes: ['name'],
      }],
    });
    res.status(200).json(myRoutes);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
