import express from "express";
import { UserController ,userLoginController} from "../controller/user.controller.js";

const router = express.Router();

router.post("/api/signup", UserController);
router.post("/api/login",userLoginController)

export default router;
