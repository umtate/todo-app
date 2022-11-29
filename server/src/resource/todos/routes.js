import express from "express";
import { getTodoController, getTodosController, updateTodo, updateTodoStatus} from "./controller.js";

const todoRouter = express.Router();

todoRouter.route("/").get((req, res) => {
  (async () => {
    const todos = await getTodoController();
    res.json(shops)
  })()
});

todoRouter.route("/:todoId").get((req, res) => {
  const id = req.params.todoId;
  (async () => {
    const todo = await getTodosController(id);
    res.json(users)
  })()

});

todoRouter.route("/").post((req, res) => {
  const todo = req.body;
  (async () => {
    const dbRes = await createTodo(todo)
    res.json(dbRes)
  })()
});

todoRouter.route("/update-status").post((req, res) => {
  const {todo, id} = req.body;
  (async () => {
    const dbRes = await updateTodo(todo, id)
    res.json(dbRes)
  })()
});

todoRouter.route("/update-description").post((req, res) => {
  const {todo, id} = req.body;
  (async () => {
    const dbRes = await updateTodo(todo, id)
    res.json(dbRes)
  })()
});



export default todoRouter;
