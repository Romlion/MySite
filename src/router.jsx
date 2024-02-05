/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const validateUser = require("./middlewares/validateUser");

router.get("/user/:id", userControllers.getUserById);
router.get("/user", userControllers.getUsers);
router.post("/user", validateUser, userControllers.addUser);
router.post("/user", userControllers.getByMail);
router.delete("/user/:id", userControllers.deleteUser);

export default router;