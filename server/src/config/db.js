import { DBPASSWORD, DBNAME, DBUSERNAME } from "./environment.js";

import Sequelize from "sequelize";

const sequelize = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default sequelize;
