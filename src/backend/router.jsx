

import { Router } from "express";

const router = Router();

import { getUserById, getUsers, addUser, getByMail, deleteUser } from "./controllers/userControllers";
import validateUser from "./middlewares/validateUser";
import { getMessageById, getMessage, addMessage, deleteMessage } from "./controllers/messageControllers";
import validateMessage from "./middlewares/validateMessage";

router.get("/user/:id", getUserById);
router.get("/user", getUsers);
router.post("/user", validateUser, addUser);
router.post("/user", getByMail);
router.delete("/user/:id", deleteUser);

router.get("/message/:id", getMessageById);
router.get("/message", getMessage);
router.post("/message", validateMessage, addMessage);
router.post("/message/:id", deleteMessage);

export default router;