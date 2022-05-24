import { Router } from "express";
import userController from "../controllers/userController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", userController.index);
router.post("/", userController.show);

router.get("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);
export default router;
