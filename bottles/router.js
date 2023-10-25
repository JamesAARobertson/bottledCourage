import express from "express";
import * as bottlesController from "./controllers.js";

export const bottlesRouter = express.Router();

bottlesRouter.get("/all", bottlesController.getAllBottles);
bottlesRouter.get("/", bottlesController.getRandomBottles);
bottlesRouter.get("/:id", bottlesController.getBottleById);

bottlesRouter.post("/", bottlesController.createBottle);

bottlesRouter.delete("/:id", bottlesController.deleteBottle);

