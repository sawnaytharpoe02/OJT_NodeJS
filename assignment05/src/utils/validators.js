const validateBody = (schema) => {
	return (req, res, next) => {
		let result = schema.validate(req.body);
		if (result.error) {
			next(new Error(result.error.details[0].message));
		} else {
			next();
		}
	};
};

const validateParams = (schema, name) => {
	return (req, res, next) => {
		let obj = {};
		obj[`${name}`] = req.params[`${name}`];
		let result = schema.validate(obj);
		if (result.error) {
			next(new Error(result.error.details[0].message));
		} else {
			next();
		}
	};
};

export { validateBody, validateParams };
