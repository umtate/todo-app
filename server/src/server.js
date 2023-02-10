import express from "express";
import router from "./routes/index.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors"
import sequelize from "./config/db.js";
import passportConfig from "./config/passport.js";
import { APPSECRET } from "./config/environment.js";

const app = express();

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

app.use(cookieParser());
app.use(session({secret: APPSECRET}))
passportConfig(app)
app.use(router);

export default app