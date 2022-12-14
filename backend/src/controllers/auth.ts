import { Handler } from "express";
import { Profile } from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import { user } from "../models/user.model";
import { tokenSign } from "../helpers/validation";
import { compare } from "bcryptjs";

export const login: Handler = (req, res) => {
  const { email, password } = req.body;

  user
    .findOne({ email })
    .then((user) => {
      if (!user) return res.status(400).json({ err: "email.unvalid email" });

      compare(password, user.password, (err, success) => {
        if (err)
          return res.status(400).json({ err: "something wrong happend" });

        if (success)
          return res.status(200).json({ token: tokenSign(user._id) });

        res.status(400).json({ err: "password.unvalid password" });
      });
    })
    .catch(() => res.status(400).json({ err: "something wrong happend #1" }));
};

export const signup: Handler = (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ err: "password.check your password" });

  user
    .findOne({ email })
    .then((userFound) => {
      if (userFound) return res.json({ err: "email.email already taken" });

      return new user({ email, password })
        .save()
        .then((user) => res.status(200).json({ token: tokenSign(user._id) }))
        .catch(() =>
          res.status(400).json({ err: "name.something wrong happend 1" })
        );
    })
    .catch(() =>
      res.status(400).json({ err: "name.something wrong happend 2" })
    );
};

export const googleAuthMid: Handler = (req, res) => {
  const userDetails = req.user as Profile;
  const name = userDetails.displayName;
  const email = userDetails.emails![0].value;

  user
    .findOne({ $or: [{ name }, { email }] })
    .then((userFound) => {
      if (userFound)
        return res.redirect(
          "https://booki-chi.vercel.app/main?token=" + tokenSign(userFound._id)
        );

      new user({ name, email, password: Date.now().toString() })
        .save()
        .then((savedUser) =>
          res.redirect(
            "https://booki-chi.vercel.app/main?token=" +
              tokenSign(savedUser._id)
          )
        )
        .catch(() => res.status(400).json({ err: "something wrong happend" }));
    })
    .catch(() => res.status(400).json({ err: "something wrong happend" }));
};

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.CLIENT_ID as string,
    clientSecret: process.env.SCLIENT_SECRET_ID as string,
    callbackURL: "https://boki-six.vercel.app/auth/google/callback",
  },
  function (_, __, profile, done) {
    return done(null, profile);
  }
);
