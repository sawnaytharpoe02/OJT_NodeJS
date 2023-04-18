import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user';
import postRouter from './routes/post';
dotenv.config();

const app = express();
const port = process.env.PORT;
const dbName = process.env.DB_NAME;
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use(
	(
		err: { status: number; message: number | string },
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		err.status = err.status || 500;
		err.message = err.message || 'Internel Server Error';
		res.status(err.status).json({
			con: false,
			msg: err.message,
		});
	}
);

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}}`).then(() => {
	console.log('database is connected');
	app.listen(port, () => {
		console.log(`Server is running at port ${port}`);
	});
});
