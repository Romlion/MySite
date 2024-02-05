import AbstractManager from "./AbstractManager";

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

    async read(id) {
        const [rows] = await this.database.query(
            `select id, lastname, firstname, phonenumber, email from ${this.table} where id = ?`,
            [id]
        );

        return rows[0];
    }

    async readAll() {
        const [rows] = await this.database.query(
            `SELECT id, lastname, firstname, email 
            FROM ${this.table}`
        );

        return rows;
    }

    async createUser(user) {
            const [result] = await this.database.query(
                `INSERT INTO ${this.table}(lastname, firstname, phonenumber, email) VALUES (?, ?, ?, ?)`,
                [
                    user.lastname,
                    user.firstname,
                    user.phonenumber,
                    user.email, 
                ]
            );
            const userId = result.insertId;
            return userId;
    }

    async findByMail(email) {
        const [data] = await this.database.query(
            `SELECT * FROM ${this.table} WHERE email = ?`,
            [email]
          );
          return data[0];
    }
}

export default UserManager;