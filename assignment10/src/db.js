import mongoose from 'mongoose';

const connection = async () => {
	try {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		await mongoose.connect(process.env.DB, options);
		console.log('connected to database');
	} catch (error) {
		console.log(error, 'could not connect database');
	}
};

export default connection;
