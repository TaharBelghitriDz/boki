import { Router } from "express";
import {
  collectinActions,
  collectionGet,
  createCollection,
} from "../controllers/collections";
import { validateToken } from "../middlewares/validateToken";

const router = Router();

router.use(validateToken);
router.post("/create", createCollection);
router.post("/action", collectinActions);
router.get("/get*", collectionGet);

export default router;
