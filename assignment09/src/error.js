export const errorHandler = (err, req, res, next) => {
	const statusCode = err.status || 500;
	const message = err.message || 'Unknown error occured.';
	const stack = err.stack;

	if (statusCode >= 500) {
		console.err(err);
	}
	res.status(statusCode).json({
		statusCode,
		condition: false,
		message,
		stack,
	});
};
