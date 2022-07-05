import { Router } from 'express';
import { signInSchema, signUpSchema } from '../schemas/authSchema.js';
import { validateSchema } from '../middlewares/schemaValidator.js';
import { validateSignUp, validateSignIn } from '../middlewares/authValidator.js';
import { signUp, signIn } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/sign-up', [validateSchema(signUpSchema), validateSignUp], signUp);
authRouter.post('/sign-in', [validateSchema(signInSchema), validateSignIn], signIn);

export default authRouter;