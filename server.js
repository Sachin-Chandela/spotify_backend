import "dotenv/config";
import connect from "./src/db/connection.js";

import app from "./src/app.js";

app.listen(3000, () => {
  console.log("server is running");
});

connect();
