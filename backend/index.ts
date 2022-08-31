import dotenv from "dotenv";
dotenv.config();

import "./config/mongo.config";
import app from "./src";

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT " + PORT));
