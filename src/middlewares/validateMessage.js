/* eslint-disable no-undef */
import Joi from "joi";

const messageSchema = object({
    lastname: Joi.string().max(50).required(),
    firstname: Joi.string().max(50).required(),
    phonenumber: Joi.string().max(50).required(),
    email: Joi.string().email().max(255).required(),
});

const validateMessage = (req, res, next) => {
    const { lastname, firstname, phonenumber, email } = req.body;

    const { error } = messageSchema.validate(
        { lastname, firstname, phonenumber, email },
        { abortEarly: false }
      );

      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        next();
      }
    }; 

export default validateMessage;