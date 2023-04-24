import mongoose, { Schema, model } from 'mongoose';

const MovieSchema = new Schema(
	{
		name: { type: String, required: true },
		year: { type: String, required: true },
		rating: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

const Movie = mongoose.model('movie', MovieSchema);

export default Movie;
