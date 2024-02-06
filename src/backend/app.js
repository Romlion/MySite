/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001

app.use(bodyParser.json());

app.post("/contact", (req, res) => {
    const formData = req.body;
    console.log("Données du formulaire reçues :", formData);

    res.json({ message: "Données du formulaire reçues avec succès !" });
});

app.listen(PORT, () => {
    console.log(`Server backend démarré sur le port ${PORT}`);
});