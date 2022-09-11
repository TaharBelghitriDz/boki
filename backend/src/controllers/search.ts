import { Handler } from "express";
import axios from "axios";
import random from "random-words";

export const search: Handler = (req, res) => {
  const { query } = req.query;

  const data = {
    q: (query as string | undefined) || random(1)[0] + "+intitle",
    filter: "free-ebooks",
    maxResults: "10",
    printType: "books",
    key: process.env.GOOGLE_KEY as string,
    orderBy: "newest",
  };

  const searchUrl = new URLSearchParams(data);

  axios
    .get("https://www.googleapis.com/books/v1/volumes?" + searchUrl.toString())
    .then(({ data }: any) => res.status(200).json({ data }))
    .catch(() => res.status(400).json({ err: "something wrong happend" }));
};
