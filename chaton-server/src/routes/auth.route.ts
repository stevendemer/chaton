import { Router, Request, Response } from "express";
import { signUp, signIn, signOut } from "../controllers/auth.controller";
import authenticateToken from "../middleware/authToken";
const router = Router();

router.post("/auth/signup", signUp);

router.post("/auth/signin", signIn);

export default router;
