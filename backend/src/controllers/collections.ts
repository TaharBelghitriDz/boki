import { Handler } from "express";
import { user } from "../models/user.model";
import { userSchema } from "../types/model";

export const createCollection: Handler = (req, res) => {
  const { name } = req.body as Record<string, string>;

  const userInfos = (req as any).user as userSchema;

  user
    .findOne({ $and: [{ "collections.name": name }, { _id: userInfos._id }] })
    .then((user) => {
      if (user) return res.status(400).json({ err: "name already used" });

      userInfos.collections.push({ name });
      userInfos
        .save()
        .then(() => res.status(200).json({ result: "created" }))
        .catch(() =>
          res.status(400).json({ err: "somethiong wrong happend #1" })
        );
    })
    .catch(
      (err) => (
        console.log(err),
        res.status(400).json({ err: "something wrong happend #2" })
      )
    );
};

export const collectinActions: Handler = (req, res) => {
  const { collectionName, bookName, img, action } = req.body;

  const userInfos = (req as any).user as userSchema;

  if (!action) return res.status(400).json({ err: "no action " });

  if (
    (action === "create" && collectionName && bookName && img) ||
    (action === "remove" && (collectionName || bookName))
  )
    user
      .find({ $and: [{ _id: userInfos._id }] })
      .then((user) => {
        if (!user) return;
      })
      .catch(
        (err) => (
          console.log(err),
          res.status(400).json({ err: "something wrong happend #2" })
        )
      );
};
