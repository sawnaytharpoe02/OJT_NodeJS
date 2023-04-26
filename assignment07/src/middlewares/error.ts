import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
	err: { status: number; message: string | number; stack?: string },
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = err.status || 500;
	const message = err.message || 'Unknown error occured';
	const stack = err.stack;
	const response = {
		condition: false,
		message,
		stack,
	};

	if (status >= 500) {
		console.log(err);
	}

	res.status(status).json(response);
};
