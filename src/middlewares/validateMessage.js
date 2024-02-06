/* eslint-disable no-undef */
import { string } from "joi";

const messageSchema = object({
    lastname: string().max(50).required(),
    firstname: string().max(50).required(),
    phonenumber: string().max(50).required(),
    email: string().email().max(255).required(),
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