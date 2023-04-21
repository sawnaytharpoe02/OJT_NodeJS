import { Router } from 'express';
import {
	showLoginForm,
	loginUser,
	showSignupForm,
	signupUser,
	logoutUser,
} from '../controllers/authController.js';

const authRouter = Router();

authRouter.get('/login', showLoginForm);
authRouter.post('/login', loginUser);
authRouter.get('/signup', showSignupForm);
authRouter.post('/signup', signupUser);
authRouter.get('/logout', logoutUser);

export default authRouter;
