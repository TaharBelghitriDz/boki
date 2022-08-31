import { Router } from "express";
import { googleAuthMid, login, signup } from "../controllers/auth";
import passport from "passport";
const router = Router();

router.post("/login", login);
router.post("/signup", signup);

router.use(passport.initialize());

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuthMid
);

export default router;
