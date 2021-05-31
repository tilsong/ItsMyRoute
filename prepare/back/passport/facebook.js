const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const { User } = require('../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = () => {
    passport.use(new FacebookStrategy({
      clientID: process.env.FACEBOOK_CLIENTID, 
      clientSecret: process.env.FACEBOOK_CLIENTSECRET,
      callbackURL: 'http://localhost:3065/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'email'],
      passReqToCallback: true,
    }, async (req, accessToken, refreshToken, profile, done) => {
      console.log('facebook profile', profile); // 꼭 확인해보자!
      console.log(profile.displayName);
      console.log(profile.emails[0].value);
      try {
        const exEmail = await User.findOne({
          where: { email: profile.emails[0].value },
        })
        if(exEmail) {
          done(null, exEmail);
        }
        const exUser = await User.findOne({ 
          where: { snsId: profile.id, provider: 'facebook' },
        });
        if (exUser) {
          done(null, exUser);
        } else { // 회원 정보가 있으면 로그인
          const newUser = await User.create({ // 없으면 회원 생성
            snsId: profile.id,
            email: profile.emails[0].value,
            nickname: profile.displayName,
            provider: 'facebook',
        });
         done(null, newUser); // 새로운 회원 생성 후 로그인
        }
      } catch(error) {
        console.error(error);
        done(error);
      }
    }));
  };