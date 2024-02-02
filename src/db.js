import { createConnection } from "mysql";

const connection = createConnection({
    host: "localhost:5173",
    user: "root",
    password: "Werewolf59116@",
    database: "MySite",
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err);
    } else {
        console.log("connecté à la base de données MySQL");
    }
});

export default connection