import express from "express";
import { Status } from "../../utils/utils.js";
import {  getTodosController, getTodoController, updateTodoDescription, updateTodoStatus, createTodo, deleteTodo} from "./controller.js";

const todoRouter = express.Router();

todoRouter.route("/listTodos/:userId").get((req, res) => {
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

todoRouter.route("/:todoId/deleteTodo").delete((req, res) => {
  const id =  req.params.todoId;;
  (async () => {
    const dbRes = await deleteTodo(id)
    res.json(dbRes)
  })()
});



todoRouter.route("/createTodo").post((req, res) => {
  const todo = req.body;
  (async () => {
    const dbRes = await createTodo(todo)
    res.json(dbRes)
  })()
});

todoRouter.route("/:todoId/markTodoCompleted").put((req, res) => {
  const id = req.params.todoId;
  (async () => {
    const dbRes = await updateTodoStatus( Status.Complete, id)
    res.json(dbRes)
  })()
});

todoRouter.route("/:todoId/markTodoUncompleted").put((req, res) => {
  const id = req.params.todoId;
  (async () => {
    const dbRes = await updateTodoStatus(Status.Uncomplete, id)
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
