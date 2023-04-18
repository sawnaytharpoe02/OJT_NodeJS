import express from 'express';
import apiRouter from './routes/apiRoute.js';
const app = express();

app.use(express.json());

app.use('/api', apiRouter);

app.listen(3333, console.log('Server is started at port 3333'));
