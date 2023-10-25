import express from "express";
import morgan from "morgan";
import { bottlesRouter } from "./bottles/router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use("/", bottlesRouter);

export default app;
