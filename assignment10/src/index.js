import dotenv from 'dotenv';
import express from 'express';
import connection from './db.js';
import userRoute from './routes/userRouter.js';
import passwordResetRoute from './routes/passwordResetRouter.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);
app.use('/api/password-reset', passwordResetRoute);

const port = process.env.PORT;

connection().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at  http://localhost:${port}`);
	});
});
