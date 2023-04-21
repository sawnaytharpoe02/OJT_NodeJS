import express from 'express';
import multer from 'multer';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRouter.js';

const app = express();
const upload = multer();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(
	session({
		secret: 'Secret that will sign',
		resave: false,
		saveUninitialized: false,
	})
);

app.use('/', authRouter);

app.use('/protected_page', (req, res, next) => {
	if (req.session.user) {
		return next();
	}
	const err = new Error('Not logged in!');
	console.log(req.session.user);
	return next(err);
});

app.get('/protected_page', (req, res) => {
	res.render('protected_page', { id: req.session.user.id });
});

app.use((err, req, res, next) => {
	console.log(err);
	//User should be authenticated! Redirect him to log in.
	res.redirect('/login');
});

app.listen(6600, () => {
	console.log('Server is running at http://localhost:6600/signup');
});
