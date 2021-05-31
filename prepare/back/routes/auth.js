const express = require('express');
const passport = require('passport');

const router = express.Router();
const afterPage = 'http://localhost:3000';
// 카카오 로그인하기
// GET /auth/kakao/
// 최초 카카오 Strategy가 실행되면, 카카오 로그인부터 시작을 해야하고,
// 카카오 로그인 페이지에서 로그인하면 콜백URI로 이동을 한다.

// 카카오
router.get('/kakao', passport.authenticate('kakao', {
   failureRedirect: '/', // 실패했을 경우 리다이렉트 경로
}));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
  }), function(req, res) {
    res.redirect(afterPage);
});

// 페이스북
router.get('/facebook', passport.authenticate('facebook', {
    authType: 'rerequest', scope: ['public_profile', 'email']
}));
router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/' }), function(req, res) {
    res.redirect(afterPage);
});

// 구글
router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect(afterPage);
});

// 네이버
router.get('/naver', passport.authenticate('naver', { scope: ['email', 'profile'] }, { failureRedirect: '/'}));
router.get('/naver/callback', passport.authenticate('naver', {
  failureRedirect: '/',
}), function(req, res) {
  res.redirect(afterPage);
});

module.exports = router;