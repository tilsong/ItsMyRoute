const express = require('express');
const { Op } = require('sequelize');
const { MyRoute, User, MyRouteFile, Comment } = require('../models');

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
          attributes: ['id', 'nickname'],
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
            attributes: ['id', 'nickname'],
          }],
        },],
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
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: MyRouteFile,
        },],
      });
      res.status(200).json(myRoutes);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  module.exports = router;