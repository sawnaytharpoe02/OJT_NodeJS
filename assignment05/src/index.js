import dotenv from 'dotenv';
import express from 'express';
import { connection } from './db.js';
import movieRouter from './routes/movieRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/movies', movieRouter);

app.use((err, req, res, next) => {
	err.status = err.status || 500;
	err.message = err.message || 'Internal Server Error';
	res.status(err.status).json({
		con: false,
		msg: err.message,
	});
	next();
});

const port = process.env.PORT;

connection().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at ${port}`);
	});
});

// Create movie post with this sample data
// post 1 : {"name": "Fight Club", "year": "1999", rating: 8.1}
// post 2 : {"name": "Inception", "year": "2010", rating: 8.7}
// post 3 : {"name": "The Dark Knight", "year": "2008", rating: 9}
// post 4 : {"name": "12 Angry Men", "year": "1957", rating: 8.9}
// post 5 : {"name": "The Kingdom", "year": "2020", rating: 9}
