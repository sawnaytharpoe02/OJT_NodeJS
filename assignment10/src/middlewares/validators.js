import { AllSchema } from '../utils/schema.js';

const validateBody = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) return res.status(400).json({ err: error.details[0].message });
		next();
	};
};

const validateUser = validateBody(AllSchema.UserSchema);
const validateEmail = validateBody(AllSchema.EmailSchema);
const validatePassword = validateBody(AllSchema.PasswordSchema);

export { validateUser, validateEmail, validatePassword };
