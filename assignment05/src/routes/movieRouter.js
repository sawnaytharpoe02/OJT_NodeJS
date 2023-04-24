import { Router } from 'express';
import { add, all, get, edit, drop } from '../controllers/movieController.js';
import { validateBody, validateParams } from '../utils/validators.js';
import { AddMovie, AllSchema } from '../utils/schema.js';

const movieRouter = Router();

movieRouter.get('/', all);
movieRouter.post('/', [validateBody(AddMovie), add]);

movieRouter
	.route('/:id')
	.get([validateParams(AllSchema.id, 'id'), get])
	.put([validateParams(AllSchema.id, 'id'), edit])
	.delete([validateParams(AllSchema.id, 'id'), drop]);

export default movieRouter;
