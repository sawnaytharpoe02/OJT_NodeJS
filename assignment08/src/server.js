import dotenv from 'dotenv';
import express from 'express';
import { QuoteRouter } from './routes/quoteRoute.js';

dotenv.config();

const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/quotes', QuoteRouter);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/quotes`);
});
