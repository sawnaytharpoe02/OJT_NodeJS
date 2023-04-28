import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import './auth/auth.js';
import { errorHandler } from './error.js';
import dbconnection from './config/db.js';

dotenv.config();

import userRouter from './routes/userRoute.js';
import secureRoute from './routes/secureRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

const port = process.env.PORT;

dbconnection().then(() => {
	app.listen(port, () => {
		console.log(`Server is started at port ${port}`);
	});
	app.use('/', userRouter);
	app.use(
		'/user',
		passport.authenticate('jwt', { session: false }),
		secureRoute
	);
	app.use(errorHandler);
});
