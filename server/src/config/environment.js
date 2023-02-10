import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DBPASSWORD = process.env.DBPASSWORD;
const DBUSERNAME = process.env.DBUSERNAME;
const DBNAME = process.env.DBNAME;
const APPSECRET = process.env.APPSECRET
export { PORT, DBPASSWORD, DBUSERNAME, DBNAME, APPSECRET };
