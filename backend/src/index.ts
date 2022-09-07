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
import { search } from "./controllers/search";

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
app.get("/search/*", search);
passport.use(googleStrategy);

user.findOne({ "collections.name": "fff" }, (e: any, r: any) => {
  console.log(r);
});

export default app;
