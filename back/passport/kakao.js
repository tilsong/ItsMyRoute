const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy
const dotenv = require('dotenv');
const { User } = require('../models');
dotenv.config();

module.exports = () => {
    passport.use(new KakaoStrategy({
      clientID: process.env.KAKAO_CLIENTID, // 이것이 REST API KEY
      clientSecret: process.env.KAKAO_CLIENTSECRET,
      callbackURL: 'http://localhost:3065/auth/kakao/callback', // Redirect URI
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('kakao profile', profile);
      try {
        const exEmail = await User.findOne({
          where: { email: profile._json && profile._json.kakao_account.email, },
        })
        if(exEmail) {
          done(null, exEmail);
        }
        const exUser = await User.findOne({ // 카카오 가입자 찾기.
          where: { snsId: profile.id, provider: 'kakao'},
        });
        if (exUser) { // 가입자 있으면? 로그인 성공
          done(null, exUser);
        } else { // 없으면? 생성 후 로그인 시키기
          const newUser = await User.create({
            // id - Number이며, 사용자의 kakao id
            // _json - 사용자 정보 조회로 얻은 json 원본 데이터
            email: profile._json && profile._json.kakao_account.email,
            nickname: profile.displayName,
            snsId: profile.id, // 새로 추가한 sns Id 컬럼
            provider: 'kakao', // 새로 추가한 가입 출처 컬럼
          });
          done(null, newUser);
        }
      } catch(error) {
        console.error(error);
        done(error);
      }
    }));
  }