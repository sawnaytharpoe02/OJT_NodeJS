let users = [];

const createUser = (id, password) => {
	const newUser = { id, password };
	users.push(newUser);
};

const checkUserExists = (id) => {
	const user = users.find((user) => user.id === id);
	if (user) {
		return true;
	}
	return false;
};

const getUser = (id, password) => {
	const user = users.find((user) => user.id === id && user.password === password);
	if (user) {
		return user;
	}
	return null;
};

export { createUser, checkUserExists, getUser };
