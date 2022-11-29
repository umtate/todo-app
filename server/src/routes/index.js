import express from "express"
import authRouter from "../resource/auth/routes.js";
import todoRouter from "../resource/todos/routes.js";
import userRouter from "../resource/users/routes.js"

const router = express.Router();

router.use("/users", userRouter);
router.use("/auth", authRouter)
router.use("/todos", todoRouter)

export default router;
