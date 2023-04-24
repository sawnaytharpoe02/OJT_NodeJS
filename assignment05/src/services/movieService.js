import Movie from '../models/movie.js';
import { resMessage } from '../utils/helper.js';

const allMovieService = async (req, res, next) => {
	try {
		const movies = await Movie.find();
		resMessage(res, 'Gets the list of all movies', movies);
	} catch (err) {
		next(err);
	}
};

const createMovieService = async (req, res, next) => {
	try {
		const movie = await new Movie(req.body).save();
		resMessage(res, 'Creates a new movie with the details provided', movie);
	} catch (err) {
		next(err);
	}
};

const getMovieService = async (req, res, next) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (movie) {
			const getMovie = await Movie.findById(movie._id);
			resMessage(res, `Gets the details of Movie id ${movie._id}`, getMovie);
		} else {
			next(new Error('There is no moive id that you searching for!'));
		}
	} catch (err) {
		next(err);
	}
};

const editMovieService = async (req, res, next) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (movie) {
			const update = {
				name: req.body.name,
				year: req.body.year,
				rating: req.body.rating,
			};
			const editMovie = await Movie.findOneAndUpdate(movie._id, update, {
				new: true,
				upsert: true,
			});
			resMessage(res, `Modifies movie id ${movie._id}`, editMovie);
		} else {
			next(new Error('There is no moive id that you searching for!'));
		}
	} catch (err) {
		next(err);
	}
};

const deleteMovieService = async (req, res, next) => {
	try {
		const movie = await Movie.findById(req.params.id);
		if (movie) {
			await Movie.findByIdAndDelete(movie._id);
			resMessage(res, `Movie id ${movie._id} deleted `);
		} else {
			next(new Error('There is no moive id that you searching for!'));
		}
	} catch (err) {
		next(err);
	}
};

export {
	allMovieService,
	createMovieService,
	getMovieService,
	editMovieService,
	deleteMovieService,
};
