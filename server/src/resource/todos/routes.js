import express from "express";
import {  getTodosController, getTodoController, updateTodoDescription, updateTodoStatus, createTodo} from "./controller.js";

const todoRouter = express.Router();

todoRouter.route("/:userId").get((req, res) => {
  const id = req.params.userId;
  (async () => {
    const todo = await getTodosController(id);
    console.log(todo)
    res.json(todo)
  })()

});

todoRouter.route("/todo/:todoId").get((req, res) => {
  const id = req.params.todoId;
  (async () => {
    const todo = await getTodoController(id);
    res.json(todo)
  })()

});

todoRouter.route("/todo").post((req, res) => {
  const todo = req.body;
  (async () => {
    const dbRes = await createTodo(todo)
    res.json(dbRes)
  })()
});

todoRouter.route("/:todoId/update-status").post((req, res) => {
  const id = req.params.todoId;
  const todo = req.body;
  (async () => {
    const dbRes = await updateTodoStatus(todo, id)
    res.json(dbRes)
  })()
});

todoRouter.route("/:todoId/update-description").post((req, res) => {
  const id = req.params.todoId;
  const todo = req.body;
  (async () => {
    const dbRes = await updateTodoDescription(todo, id)
    res.json(dbRes)
  })()
});



export default todoRouter;
