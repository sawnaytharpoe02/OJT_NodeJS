import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import connection from './config/db';
import { userRouter } from './routes/userRoute';
import { errorHandler } from './middlewares/error';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

const port = process.env.PORT;
connection().then(() => {
	app.listen(port, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
	});
	app.use(errorHandler);
});
