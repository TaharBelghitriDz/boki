import express, { Send } from "express";
import authRout from "./routes/auth";
import session from "express-session";
import { validateReq } from "./middlewares/validateReq";
import helmet from "helmet";
import cors from "cors";
import passport from "passport";
import { googleStrategy } from "./controllers/auth";
import { user } from "./models/user.model";
import collection from "./routes/collections";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET as string,
  })
);

app.use(cors());
app.use(helmet());

app.use(validateReq);
app.use(authRout);
app.use("/collection", collection);
passport.use(googleStrategy);

const array = [
  { e: "hi", i: 1 },
  { e: "hi", i: 2 },
  { e: "hi", i: 4 },
];

console.log(array);

const arr = array.filter((e) => e.i != 2);
console.log(arr);

user.findOne(
  {},

  (err: any, token: any) => {
    console.log(token.collections[0]);
    //const rr = token.collections.filter((e: any) => e.name != "c01");
    // console.log(rr);

    //console.log(token.collections[0].books);
    // token.collections[0].books = [{ title: "b02", img: "02" }];
    // token
    //   .save()
    //   .then(() => console.log({ result: "created" }))
    //   .catch(() => console.log({ err: "somethiong wrong happend #1" }));
  }
);

export default app;
