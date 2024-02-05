// eslint-disable-next-line no-undef
const tables = require("../backend/tables");

const getUserById = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  const user = req.body;

  try {
    const insertId = await tables.user.createUser(user);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await tables.user.delete(req.params.id);
    if (deleteUser.affectedRows === 0) {
      res.status(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const getByMail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await tables.user.findByMail(email);
    if (user) {
      req.userId = user.id;
      req.lastname = user.lastname;
      req.firstname = user.firstname;
      req.phonenumber = user.phonenumber;
      req.email = user.email;
      next();
    } else {
      res.status(404).send('Invalid email');
    }
  } catch (err) {
    res.sendStatus(500);
  }
};


const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await tables.user.findByMail(email);
    if (user) {
      res.status(409).send("Email already exists");
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
}

export default {
  getUserById,
  getUsers,
  addUser,
  getByMail,
  verifyEmail,
  deleteUser,
};
