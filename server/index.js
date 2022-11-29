import { PORT } from "./src/config/environment.js";
import app from "./src/server.js";

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
