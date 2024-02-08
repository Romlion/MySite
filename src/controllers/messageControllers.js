
import tables from "../tables";

const browse = async (req, res, next) => {
    try {
        const messages = await tables.message.readAll();

        res.json(messages);
    } catch (err) {
        next(err);
    }
};

const read = async (req, res, next) => {
    try {
        const message = await tables.message.read(req.params.id);

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
        const insertId = await tables.message.create(message);

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