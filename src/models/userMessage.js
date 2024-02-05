/* eslint-disable no-undef */
const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
    constructor() {
        super({ table: "userMessage" });
    }

    async create(message) {
        const [result] = await this.database.query(
            `insert into ${this.table} (text) values (?)`,
            [message.text]
        );

        return result.insertId;
    }

    async read(id) {
        const [rows] = await this.database.query(
            `select * from ${this.table} where id = ?`,
            [id]
        );

        return rows[0];
    }

    async readAll() {
        const [rows] = await this.database.query(`select * from ${this.table}`);

        return rows;
    }
}

module.exports = MessageManager;