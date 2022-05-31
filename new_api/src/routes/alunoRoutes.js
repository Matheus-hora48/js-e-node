import { Router } from "express";
import alunoController from "../controllers/alunoController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", alunoController.index);
router.post("/", alunoController.store);
router.put("/:id", loginRequired, alunoController.update);
router.get("/:id", alunoController.show);
router.delete("/:id", loginRequired, alunoController.delete);

export default router;
