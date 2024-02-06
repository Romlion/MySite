/* eslint-disable no-undef */
import { string } from "joi";

const userSchema = object({
    lastname: string().max(50).required(),
    firstname: string().max(50).required(),
    phonenumber: string().max(50).required(),
    email: string().email().max(255).required(),
});

const validateUser = (req, res, next) => {
    const { lastname, firstname, phonenumber, email } = req.body;

    const { error } = userSchema.validate(
        { lastname, firstname, phonenumber, email },
        { abortEarly: false }
      );

      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        next();
      }
    }; 

export default validateUser;