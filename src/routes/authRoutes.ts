import express from 'express';
import { AuthController } from '../controllers/authController.js';
import { validateData } from '../middlewares/validationMiddleware.js';
import { createUserSchema, loginRequestSchema } from '../schemas/authSchema.js';

const router = express.Router();

router.post('/register', validateData(createUserSchema), AuthController.createUser);
router.post('/login', validateData(loginRequestSchema), AuthController.loginUser);


export default router;