import express from "express";
import { getUser, createUser } from "./controller.js";

const userRouter = express.Router();

userRouter.route("/").get((req, res) => {
  const { userId } = req.body;
  (async () => {
    const users = await getUser(userId);
    res.json(users);
  })();
});

userRouter.route("/").post((req, res) => {
  const user = req.body;
  (async () => {
    const users = await createUser(user);
    res.json(users);
  })();
});

export default userRouter;
