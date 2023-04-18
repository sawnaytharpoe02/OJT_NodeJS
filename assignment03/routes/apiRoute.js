import express from 'express';
import { getAdd, getAreaOfCircle, getDivide, getFeetInchesToCentimeter, getModulus, getMultiply, getSubtract } from '../controllers/apiController.js';
const apiRouter = express.Router();

apiRouter.get('/add/:x/:y', (req, res) => {
	getAdd(req, res);
});

apiRouter.get('/subtract/:x/:y', (req, res) => {
	getSubtract(req, res);
});

apiRouter.get('/multiply/:x/:y', (req, res) => {
	getMultiply(req, res);
});

apiRouter.get('/divide/:x/:y', (req, res) => {
	getDivide(req, res);
});

apiRouter.get('/modulus/:x/:y', (req, res) => {
	getModulus(req, res);
});

apiRouter.get('/area_of_circle/:r', (req, res) => {
	getAreaOfCircle(req, res);
});

apiRouter.get('/feet_inch_to_cm/:f/:i', (req, res) => {
	getFeetInchesToCentimeter(req, res);
});

export default apiRouter;
