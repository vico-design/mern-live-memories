import express from "express";

import { signin, signup } from "../controllers/user.js";

const router = express.Router();

//send all the detail from the login form to the backend
router.post("/signin", signin); //when we signin, we call the signin controller
router.post("/signup", signup);

export default router;
