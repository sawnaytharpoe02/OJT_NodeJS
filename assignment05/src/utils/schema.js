import Joi from 'joi';

const AddMovie = Joi.object({
	name: Joi.string().required(),
	year: Joi.string().required(),
	rating: Joi.number().required(),
});

const AllSchema = {
	id: Joi.object({
		id: Joi.string()
			.regex(/^[0-9a-fA-F]{24}$/)
			.required(),
	}),
};

export { AddMovie, AllSchema };
