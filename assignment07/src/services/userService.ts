import User from '../models/user';

export const QureyListOfUsers = async () => {
	return await User.find();
};

export const QueryUserById = async (id: string) => {
	return await User.findById(id);
};
