import { Response } from 'express';

const responseMessage = (res: Response, message = 'success', data: {}[] = []) => {
	res.status(200).json({
		condition: true,
		message,
		data,
	});
};

export default responseMessage;
