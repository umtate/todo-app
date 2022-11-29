import passport from "passport";
import { Strategy } from "passport-local";
import sequelize from "../db.js";
import User from "../../resource/users/model.js";


const localStrategy = () => {
  passport.use(
    new Strategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      (username, password, done) => {
        sequelize.sync().then(() => {
          User.findOne({
            where: {
              name: username,
              password: password,
            },
          })
            .then((res) => {
              done(null, res);
            })
            .catch((error) => {
              done(err, false);
              console.error("Failed to retrieve data : ", error);
            });
        });
      }
    )
  );
};

export default localStrategy;
