import express, { json } from "express";
import process from "dotenv";

const app = express();

import cors from "cors";

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
    })
);

app.use(json());

import router from "./router";

app.use("/api", router);

const port = process.env.APP_PORT
console.info(port);
app.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
})
.on("error", (error) => {
console.error("Error:", error.message);
})

export default app;