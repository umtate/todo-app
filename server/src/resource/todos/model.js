import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";

const { Sequelize } = sequelize;

const Todo = sequelize.define("todo", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.DATEONLY,
  },
  todoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  updatedAt: {
    type: "TIMESTAMP",
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

export default Todo;
