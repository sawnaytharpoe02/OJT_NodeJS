import express from 'express';
import dotenv from 'dotenv';
import connection from './config/db';
import { userRouter } from './routes/userRoute';
import { errorHandler } from './middlewares/error';
import { logger } from './logger';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

logger.warn('warn');
logger.info('this is info');
logger.error('hey something wrong');
logger.error(new Error('something went wrong'));

const port = process.env.PORT;
connection().then(() => {
	app.listen(port, () => {
		logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
	});
	app.use(errorHandler);
});
