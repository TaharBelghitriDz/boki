import { Response } from "express";
import { FilterQuery, HydratedDocument, model, Schema } from "mongoose";
import { userModel, userSchema } from "../types/model";
import { hash } from "bcryptjs";

const userSchema = new Schema<userSchema>({
  email: String,
  password: String,
  collections: [
    { name: String, books: [{ title: String, img: String, id: String }] },
  ],
});

userSchema.pre<userSchema>("validate", function (this: userSchema, next) {
  //random pics

  hash(this.password, 8, (err, hash) => {
    if (err) throw err;
    this.password = hash;
    next();
  });
});

userSchema.statics.findUser = (
  query: FilterQuery<userSchema>,
  res: Response,
  rslt: HydratedDocument<userSchema>
) => user.findOne(query, (err: any, result: any) => {});

export const user = model<userSchema, userModel>("msrc.user", userSchema);
