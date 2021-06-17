const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const request = require('request');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

const { MyRoute, MyRouteDatail, MyRouteFile, Comment, User, Tag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const upload = multer({
    storage: multerS3({
      s3: new AWS.S3(),
      bucket: 'itsmyroute',
      key(req, file, cb) {
        cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`)
      }
    }),
    limits: { fileSize: 20* 1024 * 1024 },
});

// 이미지 업로드X, 포스트 업로드
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST /post
  try {
    const myRoute = await MyRoute.create({
      title: req.body.title,
      content: req.body.content,
      UserId: req.user.id,
    });
    
    if (req.body.tags) {
      const result = await Promise.all(tags.map((tag) => Tag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      }))); // [[노드, true], [리액트, true]]
      await myRoute.addTags(result.map((v) => v[0]));
    }

    if (req.body.image) {
      if (Array.isArray(req.body.image)) { // 이미지를 여러 개 올리면 image: [제로초.png, 부기초.png]
        const myRouteFiles = await Promise.all(req.body.image.map((image) => MyRouteFile.create({ src: image })));
        await myRoute.addMyRouteFiles(myRouteFiles);
      } else { // 이미지를 하나만 올리면 image: 제로초.png
        const myRouteFile = await MyRouteFile.create({ src: req.body.image });
        await myRoute.addMyRouteFiles(myRouteFile);
      }
    }
    const fullMyRoute = await MyRoute.findOne({
      where: { id: myRoute.id },
      include: [{
        model: MyRouteFile,
      }, {
        model: Comment,
        include: [{
          model: User, // 댓글 작성자
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }]
    })
    res.status(201).json(fullMyRoute);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 이미지 업로드
router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => { // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.location));
});

// 개별 마이루트 페이지, 추후 상세 내역 수정 필요
router.get('/:myRouteId', async (req, res, next) => {
  try {
    const myRoute = await MyRoute.findOne({
      where: { id: req.params.myRouteId },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
          order: [['createdAt', 'DESC']],
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.status(200).json(myRoute);
  } catch (error) {
    console.error(error);
    next(error);
  }
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