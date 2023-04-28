import mongoose from 'mongoose';

export default async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log('database connected');
	} catch (error) {
		console.log(error, 'could not connect to the database');
	}
};
