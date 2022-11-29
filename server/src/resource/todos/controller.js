import sequelize from "../../config/db.js";
import Todo from "./model.js";

export const getTodosController = async (userId) => {
  try {
    const todos = await Todo.findAll({
      where: {
        userId: userId,
      },
    });

    return todos;
  } catch (err) {
    console.error("Unable to get todos : ", error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const del = await Todo.destroy({where: { todoId: id}});
    return del;
  } catch (err) {
    console.log(err);
  }
};

export const updateTodoStatus = async (status, id) => {
  console.log(status, id)
  try {
    const todo = await Todo.update({ status: status }, { where: { todoId: id } });
    return todo;
  } catch (err) {
    console.log(err);
  }
};

export const updateTodoDescription = async (todoReq, id) => {
  try {
    const todo = await Todo.update(
      { status: todoReq.description },
      { where: { todoId: id } }
    );
    return todo;
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (todoReq, id) => {
  try {
    const todo = await Todo.update(todoReq, { where: { todoId: id } });
    return todo;
  } catch (err) {
    console.log(err);
  }
};

export const createTodo = async (todoReq) => {
  try {
    const todo = await Todo.create(todoReq);
    return todo;
  } catch (err) {
    console.log(err);
  }
};

export const getTodoController = async (id) => {
  try {
    const todo = await Todo.findAll({
      where: {
        todoId: id,
      },
    });

    return todo;
  } catch (err) {
    console.error("Unable to get todo : ", error);
  }
};
