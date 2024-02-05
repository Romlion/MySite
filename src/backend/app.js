/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");

const app = express();

const cors = require("cors");

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
    })
);

app.use(express.json());

const router = require("./router");

app.use("/api", router);

app.use(express.static("public"));

const reactBuildPath = `${__dirname}/../../frontend/dist`;

app.use(express.static(reactBuildPath));

app.get("*", (req, res) => {
    res.sendFile(`${reactBuildPath}/index.html`);
});

const port = process.env.APP_PORT
console.info(port);
app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (error) => {
console.error("Error:", error.message);
})

export default app;