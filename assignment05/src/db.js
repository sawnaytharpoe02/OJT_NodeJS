import mongoose from 'mongoose';

export const connection = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('connected to database');
	} catch (error) {
		console.log(error, 'could not connect to database');
	}
};
