import {
	allMovieService,
	createMovieService,
	editMovieService,
	getMovieService,
	deleteMovieService,
} from '../services/movieService.js';

const all = (req, res, next) => {
	allMovieService(req, res, next);
};

const add = (req, res, next) => {
	createMovieService(req, res, next);
};

const get = (req, res, next) => {
	getMovieService(req, res, next);
};

const edit = (req, res, next) => {
	editMovieService(req, res, next);
};

const drop = (req, res, next) => {
	deleteMovieService(req, res, next);
};

export { all, add, get, edit, drop };
