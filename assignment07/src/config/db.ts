import mongoose from 'mongoose';
import { logger } from '../logger';

const connection = async () => {
	try {
		if (!process.env.DB_URI) {
			throw new Error('DB_URI is not defined in the environment variables');
		}
		await mongoose.connect(process.env.DB_URI);
		logger.info('connected to the database');
	} catch (err: any) {
		logger.error(err, 'could not connect to database');
	}
};

export default connection;
