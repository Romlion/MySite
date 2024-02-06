
import { message as _message } from "../tables";

const browse = async (req, res, next) => {
    try {
        const message = await _message.readAll();

        res.json(message);
    } catch (err) {
        next(err);
    }
};

const read = async (req, res, next) => {
    try {
        const message = await _message.read(req.params.id);

        if (message == null) {
            res.sendStatus(404);
        } else {
            res.json(message);
        }
    } catch (err) {
        next(err);
    }
};

const add = async (req, res, next) => {
    const message = req.body;

    try {
        const insertId = await _message.create(message);

        res.status(201).json({ insertId });
    } catch (err) {
        next(err);
    }
};

export default {
    browse,
    read,
    add,
};