import { Router } from 'express';
import {
	getAllQuotes,
	addQuote,
	updateQuote,
	deleteQuote,
} from '../controllers/quoteController.js';

const router = Router();

router
	.route('/')
	.get(getAllQuotes)
	.post(addQuote)
	.put(updateQuote)
	.delete(deleteQuote);

export { router as QuoteRouter };
