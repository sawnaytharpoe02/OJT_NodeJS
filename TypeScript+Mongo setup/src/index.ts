import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user';
import mongoose, { Error } from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

mongoose.connect(`${process.env.DB_NAME}`);

app.use('/users', userRouter);

//error handling middleware
app.use((err: { status: number; message?: any }, req: Request, res: Response, next: NextFunction) => {
	err.status = err.status || 500;
	err.message = err.message || 'Internal Server Error';
	res.status(err.status).json({
		con: false,
		msg: err.message,
	});
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
