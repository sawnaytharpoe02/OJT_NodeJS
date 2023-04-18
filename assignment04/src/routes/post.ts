import express from 'express';
import { all, add, get, patch, drop } from '../controllers/post';

const postRouter = express.Router();

postRouter.get('/', all);
postRouter.post('/', add);
postRouter.route('/:id').get(get).patch(patch).delete(drop);

export default postRouter;
