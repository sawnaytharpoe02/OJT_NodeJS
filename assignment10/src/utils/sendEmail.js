import nodemailer from 'nodemailer';

const sendEmail = async (email, subject, text) => {
	try {
		let config = {
			service: process.env.SERVICE,
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		};
		let transporter = nodemailer.createTransport(config);

		let message = {
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		};
		await transporter.sendMail(message);

		console.log('email sent sucessfully');
	} catch (error) {
		console.log(error, 'email not sent');
	}
};

export { sendEmail };
