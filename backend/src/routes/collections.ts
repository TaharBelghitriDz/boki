import { Router } from "express";
import { collectinActions, createCollection } from "../controllers/collections";
import { validateToken } from "../middlewares/validateToken";

const router = Router();

router.use(validateToken);
router.post("/create", createCollection);
router.post("/action", collectinActions);

export default router;
