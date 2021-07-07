const passport = require('passport');
const local = require('./local');
const { User } = require('../models');
const kakao = require('./kakao');
const facebook = require('./facebook');
const google = require('./google');
const naver = require('./naver');

module.exports = () => {
    passport.serializeUser((user, done) => {//req.login의 user가 여기로 들어감
        done(null, user.id);
    });
    // 로그인 성공 후 요청 시 매번 시행되어 사용자 정보를 복구함.
    passport.deserializeUser(async (id, done) => { //async 있으면 try catch
        try {
            const user = await User.findOne({ where: { id } })
            done(null, user); // 매번 req.user에 넣어줌
        } catch (error) {
            console.error(error);
            done(error);
        }
    });
    local();
    kakao();
    facebook();
    google();
    naver();
};
