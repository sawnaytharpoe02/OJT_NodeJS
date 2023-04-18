import { Response } from 'express';

const formatMessage = (res: Response, msg: string = 'success', result: {}[] = []) => {
	res.status(200).json({
		con: true,
		msg,
		result,
	});
};

export default formatMessage;
