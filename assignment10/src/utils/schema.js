import Joi from 'joi';

const AllSchema = {
	UserSchema: Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	}),

	EmailSchema: Joi.object({
		email: Joi.string().email().required(),
	}),

	PasswordSchema: Joi.object({
		password: Joi.string().required(),
	}),
};

export { AllSchema };
