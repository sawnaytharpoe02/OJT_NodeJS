import { Request, Response, NextFunction } from 'express';
import { QueryUserById, QureyListOfUsers } from '../services/userService';
import responseMessage from '../utils/resMessage';

const GetAllUsers = (req: Request, res: Response, next: NextFunction) => {
	try {
		const users: {} = QureyListOfUsers();
		responseMessage(res, 'Get All Users Successfully', [users]);
	} catch (error) {
		next(error);
	}
};

const GetUser = (req: Request, res: Response, next: NextFunction) => {
	try {
		const user: {} = QueryUserById(req.params.id);
		responseMessage(res, `Get User Id ${req.params.id}`, [user]);
	} catch (error) {
		next(error);
	}
};

export { GetAllUsers, GetUser };
