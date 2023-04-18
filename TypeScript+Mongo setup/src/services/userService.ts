import { Response, Request, NextFunction } from 'express-serve-static-core';
import { User } from '../models/user';
import fMsg from '../helpers/helper';

const findAllUserService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let users = await User.find();
		fMsg(res, 'Get all users', [users]);
	} catch (err) {
		next(err);
	}
};

const createUserService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let newUser = await new User(req.body).save();
		fMsg(res, 'Added new user', [newUser]);
	} catch (err) {
		next(err);
	}
};

const findUserService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let user = await User.findById(req.params.id);
		if (user) {
			fMsg(res, 'Get single user', [user]);
		} else {
			next(new Error(`User with id ${req.params.id} not found. Can't get`));
		}
	} catch (err) {
		next(err);
	}
};

const editUserService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let user = await User.findById(req.params.id);
		if (user) {
			await User.findByIdAndUpdate(user._id, req.body);
			let editedUser: any = await User.findById(user._id);
			if (editedUser) {
				fMsg(res, 'Edited user successfuly', [editedUser]);
			} else {
				next(new Error(`Error editing user with id ${req.params.id}`));
			}
		} else {
			next(new Error(`User with id ${req.params.id} not found. Can't edit`));
		}
	} catch (err) {
		next(err);
	}
};

const deleteUserService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		fMsg(res, 'Deleted User Successfully');
	} catch (err) {
		next(err);
	}
};

export { findAllUserService, findUserService, createUserService, editUserService, deleteUserService };
