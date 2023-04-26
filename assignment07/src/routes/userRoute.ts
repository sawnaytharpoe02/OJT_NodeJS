import { Router } from 'express';
import { GetAllUsers, GetUser } from '../controllers/userController';

const router = Router();

router.get('/', GetAllUsers);
router.route('/:id').get(GetUser);

export { router as userRouter };
