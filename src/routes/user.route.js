// @ts-nocheck
import {Router} from 'express';
import { registerUser } from '../controllers/user.controlller.js';

const router = Router();

router.route("/register").post(registerUser);


export default router;