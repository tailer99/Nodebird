const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrpyt = require("bcrpyt");

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await User.findOne({ where: { email } });
          console.log(" user search result : ", exUser);
          if (exUser) {
            const result = await bcrpyt.compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호 불일치" });
            }
          } else {
            done(null, false, { message: "회원정보 없음" });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};