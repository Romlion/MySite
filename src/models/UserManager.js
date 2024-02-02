import AbstractManager from "./AbstractManager";

class UserManager extends AbstractManager {
    constructor() {
        super({ table: "user" });
    }

    async read(id) {
        const [rows] = await this.database.query(
            `select id, lastname, firstname, email from ${this.table} where id = ?`,
            [id]
        );

        return rows[0];
    }

    async readAll() {
        const [rows] = await this.database.query(
            `SELECT id, lastname, firstname, email FROM ${this.table}`
        );

        return rows;
    }

    async createUser(user) {
        try {
            await this.database.query("START TRANSACTION");
            const [result] = await this.database.query(
                `INSERT INTO ${this.table}(lastname, firstname, email) VALUES (?, ?, ?)`,
                [
                    user.lastname,
                    user.firstname,
                    user.email, 
                ]
            );
            const userId = result.insertId;

            await this.database.query("INSERT INTO logged_user(user_id) VALUES(?)", [
                userId,
            ]);
            await this.database.query("COMMIT");
            return userId;
        } catch (error) {
            await this.database.query("ROLLBACK");
        }
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