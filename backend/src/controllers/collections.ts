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
  // need to validate the opiration
  // (code check if there is a value and don't check if the value is on the db or no for example )
  // it's working fine for simple idea like mine (no one gonna try to hack it ... it's open source already)
  //

  const { collectionName, bookName, img, action } = req.body;

  const userInfos = (req as any).user as userSchema;

  const searchQuery = () => {
    if (
      (action === "create" && collectionName) ||
      (action === "remove" && collectionName)
    ) {
      if (action == "remove" && bookName)
        return { "collections.books.title": bookName };
      if (action == "remove" && !bookName)
        return { "collections.name": collectionName };
      else if (bookName) return { "collections.name": collectionName };

      return {};
    } else return;
  };

  if (!searchQuery())
    return res.status(400).json({ err: "something wrong happend #1" });

  user
    .findOne({
      $and: [{ _id: userInfos._id }, { ...searchQuery() }],
    })
    .then((user: any) => {
      console.log(searchQuery());

      if (!user)
        return res.status(400).json({ err: "something wrong happend #3" });

      if (action === "create" && !bookName)
        user.collections.push({ name: collectionName, books: [] });

      if (action === "create" && bookName && img)
        user.collections.map((e: any) => {
          if (e.name === collectionName)
            return e.books.push({ title: bookName, img });
        });

      if (action === "remove" && !bookName)
        user.collections = user.collections.filter(
          (e: any) => e.name !== collectionName
        );

      if (action === "remove" && bookName)
        user.collections.map((e: any) => {
          if (e.name === collectionName)
            return (e.books = e.books.filter((i: any) => i.title != bookName));
        });

      console.log(user.collections);

      user
        .save()
        .then(() => res.status(200).json({ result: action }))
        .catch(
          (err: any) => (
            console.log(err),
            res.status(400).json({ err: "somethiong wrong happend #1" })
          )
        );
    })
    .catch((err) =>
      res.status(400).json({ err: "something wrong happend #2" })
    );
};

export const collectionGet: Handler = (req, res) => {
  const { collectionName } = req.body;

  const query = collectionName ? { "collections.name": collectionName } : {};

  user
    .findOne(query)
    .then((user) => {
      if (!user)
        return res.status(400).json({ err: "something wrong happend #1" });

      res.status(200).json({
        result: query["collections.name"]
          ? user.collections.filter((e) => e.name == collectionName)
          : user.collections.map((e: any) => ({
              name: e.name,
              img: e.books[0] ? e.books[0].img : undefined,
            })),
      });
    })
    .catch(() => res.status(400).json({ err: "something wrong happend #2" }));
};
