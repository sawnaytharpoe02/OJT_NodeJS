import { createUser, checkUserExists, getUser } from '../services/authService.js';

const showLoginForm = (req, res) => {
	res.render('login');
};

const loginUser = (req, res) => {
	const { id, password } = req.body;
	if (!id || !password) {
		return res.render('login', { message: 'Please enter both id and password' });
	}
	const user = getUser(id, password);
	if (user) {
		req.session.user = user;
		return res.redirect('/protected_page');
	}
	return res.render('login', { message: 'Invalid credentials!' });
};

const showSignupForm = (req, res) => {
	res.render('signup');
};

const signupUser = (req, res) => {
	const { id, password } = req.body;
	if (!id || !password) {
		return res.status(400).send('Invalid details!');
	}
	const userExists = checkUserExists(id);
	if (userExists) {
		return res.render('signup', {
			message: 'User Already Exists! Login or choose another user id',
		});
	}
	createUser(id, password);
	req.session.user = { id, password };
	return res.redirect('/protected_page');
};

const logoutUser = (req, res) => {
	req.session.destroy(() => {
		console.log('user logged out.');
	});
	return res.redirect('/login');
};

export { showLoginForm, loginUser, showSignupForm, signupUser, logoutUser };
