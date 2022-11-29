import express from "express";
import passport from "passport";

const authRouter = express.Router();

authRouter
  .route("/login")
  .post(
    passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res) => {
      const {name, userId} = req.user;
      res.json({name, userId});
    }
  );
export default authRouter;
