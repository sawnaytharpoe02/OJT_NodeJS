import { Request, Response, NextFunction } from 'express';
import { findAllUserService, findUserService, createUserService, editUserService, deleteUserService } from '../services/userService';

const all = (req: Request, res: Response, next: NextFunction) => {
	findAllUserService(req, res, next);
};

const add = (req: Request, res: Response, next: NextFunction) => {
	createUserService(req, res, next);
};

const get = (req: Request, res: Response, next: NextFunction) => {
	findUserService(req, res, next);
};

const edit = (req: Request, res: Response, next: NextFunction) => {
	editUserService(req, res, next);
};

const drop = (req: Request, res: Response, next: NextFunction) => {
	deleteUserService(req, res, next);
};

export { all, add, get, edit, drop };
