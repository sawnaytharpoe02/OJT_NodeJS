import express from 'express';
import { all, add, get, edit, drop } from '../controllers/user';

const router = express.Router();

router.get('/', all);
router.post('/', add);
router.route('/:id').get(get).patch(edit).delete(drop);

export default router;
