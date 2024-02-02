const Joi = require("joi");

const userSchema = Joi.object({
    lastname: Joi.string().max(50).required(),
    firstname: Joi.string().max(50).required(),
    email: Joi.string().email().max(255).required(),
});

const dbConfig = {
    host:"DB_HOST",
    user: "DB_USER",
    password: "DB_PASSWORD",
    database: "DB_NAME",
};

const pool = mysql.createPool(dbConfig);

const validateUser = (req, res, next) => {
    const { lastname, firstname, email, src, password } = req.body;

    const { error } = userSchema.validate(
        { lastname, firstname, email, src, password },
        { abortEarly: false }
      );

      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        try{
          const connection = await pool.getConnection();
          await connection.execute(
            'INSERT INTO users (lastname, firstname, email) VALUES (?, ?, ?)',
          )
        }
        next();
      }
    }; 

module.exports = validateUser;