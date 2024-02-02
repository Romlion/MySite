/* eslint-disable no-undef */
const express = require("express")

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const adminControllers = require("./controllers/adminControllers");

const validateUser = require("./middlewares/validateUser");

router.get("/user/:id", userControllers.getUserById);
router.get("/user", userControllers.getUsers);
router.post("/user", validateUser,userControllers.addUser);
router.delete("/user/:id", userControllers.deleteUser);

router.post("/admin", adminControllers.postAdmin);

module.exports = router;