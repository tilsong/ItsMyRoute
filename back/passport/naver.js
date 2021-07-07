const passport = require('passport')
const NaverStrategy = require('passport-naver').Strategy
const dotenv = require('dotenv');
const { User } = require('../models');
dotenv.config();

module.exports = () => {
    passport.use(new NaverStrategy({
      clientID: process.env.NAVER_CLIENTID, 
      clientSecret: process.env.NAVER_CLIENTSECRET,
      callbackURL: 'http://localhost:3065/auth/naver/callback', 
      svcType: 0
    }, async (accessToken, refreshToken, profile, done) => {
      console.log('naver profile', profile);
      try {
        const exEmail = await User.findOne({
          where: { email: profile._json && profile._json.email, },
        })
        if(exEmail) {
          done(null, exEmail);
        }
        const exUser = await User.findOne({
          where: { snsId: profile.id, provider: 'naver'},
        });
        if (exUser) { 
          done(null, exUser);
        } else {
          const newUser = await User.create({
            email: profile._json && profile._json.email,
            nickname: profile.displayName,
            snsId: profile.id,
            provider: 'naver', 
          });
          done(null, newUser);
        }
      } catch(error) {
        console.error(error);
        done(error);
      }
    }));
  }