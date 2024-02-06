/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const validateUser = require("./middlewares/validateUser");
const messageControllers = require("./controllers/messageControllers");
const validateMessage = require("./middlewares/validateMessage");

router.get("/user/:id", userControllers.getUserById);
router.get("/user", userControllers.getUsers);
router.post("/user", validateUser, userControllers.addUser);
router.post("/user", userControllers.getByMail);
router.delete("/user/:id", userControllers.deleteUser);

router.get("/message/:id", messageControllers.getMessageById);
router.get("/message", messageControllers.getMessage);
router.post("/message", validateMessage, messageControllers.addMessage);
router.post("/message/:id", messageControllers.deleteMessage);

export default router;