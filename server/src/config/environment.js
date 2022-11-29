import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DBPASSWORD = process.env.DBPASSWORD;
const DBUSERNAME = process.env.DBUSERNAME;
const DBNAME = process.env.DBNAME;
export { PORT, DBPASSWORD, DBUSERNAME, DBNAME };
