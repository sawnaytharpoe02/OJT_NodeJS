import Token from '../models/token.js';
import User from '../models/user.js';
import crypto from 'crypto';
import { sendEmail } from '../utils/sendEmail.js';

const sendResetpasswordLink = async (req, res, next) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(400).send("user with given email doesn't exist");

		let token = await Token.findOne({ userId: user._id });
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString('hex'),
			}).save();
		}

		const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
		await sendEmail(user.email, 'Password reset', link);

		res.status(200).json({
			success: true,
			userId_token: `${user._id}/${token.token}`,
			message: 'Password reset link sent to your email account successfully',
		});
	} catch (error) {
		res.send('An error occured');
		console.log(error);
	}
};

const resetPassword = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId);
		if (!user) return res.status(400).send('Invalid link or expired');

		let token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send('Invalid link or expired');

		user.password = req.body.password;
		await user.save();
		delete (await token);
		// if (token) {
		// 	await Token.deleteOne({ _id: token._id });
		// }

		res.status(200).json({
			success: true,
			message: 'Password reset successfully',
		});
	} catch (error) {
		res.send('An error occured');
		console.log(error);
	}
};

export { sendResetpasswordLink, resetPassword };
