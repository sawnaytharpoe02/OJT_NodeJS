import {
	createPostService,
	deletePostService,
	editPostService,
	findAllPostService,
	findPostService,
} from '../services/postService';
import { Request, Response, NextFunction } from 'express';

const all = (req: Request, res: Response, next: NextFunction) => {
	findAllPostService(req, res, next);
};

const add = (req: Request, res: Response, next: NextFunction) => {
	createPostService(req, res, next);
};

const get = (req: Request, res: Response, next: NextFunction) => {
	findPostService(req, res, next);
};

const patch = (req: Request, res: Response, next: NextFunction) => {
	editPostService(req, res, next);
};

const drop = (req: Request, res: Response, next: NextFunction) => {
	deletePostService(req, res, next);
};

export { all, add, get, patch, drop };
