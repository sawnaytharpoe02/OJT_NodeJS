import User from '../models/user.js';

const findAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.status(200).json({
			success: true,
			message: 'Get All Users Successfully',
			data: users,
		});
	} catch (error) {
		res.send('An errror occured');
		console.log(error);
	}
};

const createUser = async (req, res, next) => {
	try {
		const oldName = await User.findOne({ name: req.body.name });
		if (oldName) return res.send('Username already in use');

		const oldEmail = await User.findOne({ email: req.body.email });
		if (oldEmail) return res.send('Email already in use');

		const user = await new User(req.body).save();
		res.status(200).json({
			success: true,
			message: 'User created successfully',
			data: user,
		});
	} catch (error) {
		res.send('An error occured');
		console.log(error);
	}
};

export { createUser, findAllUsers };
