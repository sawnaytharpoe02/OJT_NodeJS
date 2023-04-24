const resMessage = (res, message = 'success', result = []) => {
	res.status(200).json({
		con: true,
		msg: message,
		result,
	});
};

export { resMessage };
