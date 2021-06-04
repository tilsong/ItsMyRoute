const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const request = require('request');

const { MyRoute, MyRouteDatail, MyRouteFile, Comment, User, tag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(fail.originalname, ext);
            done(null, basename + '_' + new Date().getTime() + ext);
        },
    }),
    limits: { fileSize: 20* 1024 * 1024 },
});

router.patch('/:myRouteId/like', isLoggedIn, async (req, res, next) => { // PATCH /post/1/like
    try {
      const myRoute = await MyRoute.findOne({ where: { id: req.params.myRouteId }});
      if (!myRoute) {
        return res.status(403).send('게시글이 존재하지 않습니다.');
      }
      await myRoute.addLikers(req.user.id);
      res.json({ MyRouteId: myRoute.id, UserId: req.user.id });
    } catch (error) {
      console.error(error);
      next(error);
    }
});

router.delete('/:myRouteId/like', isLoggedIn, async (req, res, next) => { // DELETE /post/1/like
    try {
      const myRoute = await MyRoute.findOne({ where: { id: req.params.myRouteId }});
      if (!myRoute) {
        return res.status(403).send('게시글이 존재하지 않습니다.');
      }
      await myRoute.removeLikers(req.user.id);
      res.json({ MyRouteId: myRoute.id, UserId: req.user.id });
    } catch (error) {
      console.error(error);
      next(error);
    }
});

router.post('/:myRouteId/comment', isLoggedIn, async (req, res, next) => {
  try {
    console.log('123');
    const myRoute = await MyRoute.findOne({
      where: { id: req.params.myRouteId },
    });
    if (!myRoute) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    }
    console.log('456');
    const comment = await Comment.create({
      content: req.body.content,
      MyRouteId: parseInt(req.params.myRouteId, 10),
      UserId: req.user.id,
    });
    console.log('789');
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include : [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    });
    console.log(fullComment);
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;