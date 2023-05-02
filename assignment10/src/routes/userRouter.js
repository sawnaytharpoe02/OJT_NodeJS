import { Router } from 'express';
import { createUser, findAllUsers } from '../controllers/userController.js';
import { validateUser } from '../middlewares/validators.js';

const userRouter = Router();

userRouter.get('/', findAllUsers);
userRouter.post('/', [validateUser, createUser]);

export default userRouter;
