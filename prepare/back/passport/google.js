const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const dotenv = require('dotenv');
const { User } = require('../models');
dotenv.config();

module.exports = () => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: "http://localhost:3065/auth/google/callback",
        passReqToCallback   : true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        const exEmail = await User.findOne({
            where: { email: profile.email },
        })
        if(exEmail) {
            done(null, exEmail);
        }
        const exUser = await User.findOne({
            where: { snsId: profile.id, provider: 'google' },
        });
        if (exUser) {
            done(null, exUser);
        } else {
            const newUser = await User.create({
                email: profile.email,
                snsId: profile.id,
                nickname: profile.displayName,
                provider: 'google',
            });
            done(null, newUser);
        }
      } catch(error) {
          console.error(error);
          done(error);
      }
  }));
};