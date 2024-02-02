import { Router } from "express";

const router = Router();

import { getUserById, getUsers, addUser, deleteUser } from "./controllers/userControllers";
import { postAdmin } from "./controllers/adminControllers";

import validateUser from "./middlewares/validateUser";

router.get("/user/:id", getUserById);
router.get("/user", getUsers);
router.post("/user", validateUser,addUser);
router.delete("/user/:id", deleteUser);

router.post("/admin", postAdmin);

export default router;