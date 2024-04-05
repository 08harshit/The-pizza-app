import express from "express";
import { signUp, login } from '../controllers/authController';

export const router = express.Router();







router.post("/api/login", login);

router.post("/api/signup", signUp);


//module.exports = router;
