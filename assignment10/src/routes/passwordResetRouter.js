import { Router } from 'express';
import {
	sendResetpasswordLink,
	resetPassword,
} from '../controllers/passwordResetController.js';

import { validateEmail, validatePassword } from '../middlewares/validators.js';

const passwordResetRouter = Router();

passwordResetRouter.post('/', [validateEmail, sendResetpasswordLink]);
passwordResetRouter.post('/:userId/:token', [validatePassword, resetPassword]);

export default passwordResetRouter;
