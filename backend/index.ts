import dotenv from "dotenv";
dotenv.config();

import db from "./config/mongo.config";
import app from "./src";

(async () => {
  await db;
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT " + PORT));
})();
