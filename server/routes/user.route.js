import express from "express";
import { UserController } from "../controller/user.controller.js";

const router = express.Router();

router.post("/api/signup", UserController);

export default router;
