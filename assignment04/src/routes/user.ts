import express from 'express';
import { all, add, get, edit, drop } from '../controllers/user';

const userRouter = express.Router();

userRouter.get('/', all);
userRouter.post('/', add);
userRouter.route('/:id').get(get).patch(edit).delete(drop);

export default userRouter;
