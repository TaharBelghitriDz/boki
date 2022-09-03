import mongoose from "mongoose";

export default mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
