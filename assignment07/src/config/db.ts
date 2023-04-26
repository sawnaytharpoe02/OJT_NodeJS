import mongoose from 'mongoose';

const url: any = process.env.DB_URI;
const connection = async () => {
	try {
		await mongoose.connect(url);
		console.log('connected to the database');
	} catch (error) {
		console.log(error, 'could not connect to database');
	}
};

export default connection;
