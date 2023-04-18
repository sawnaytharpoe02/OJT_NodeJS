const getAddService = (req, res) => {
	let x = Number(req.params.x);
	let y = Number(req.params.y);
	const add = (x, y) => x + y;
	res.json({ add_result: add(x, y) });
};

const getSubtractService = (req, res) => {
	let x = Number(req.params.x);
	let y = Number(req.params.y);
	const subtract = (x, y) => x - y;
	res.json({ subtract_result: subtract(x, y) });
};

const getMultiplyService = (req, res) => {
	let x = Number(req.params.x);
	let y = Number(req.params.y);
	const multiply = (x, y) => x * y;
	res.json({ multiply_result: multiply(x, y) });
};

const getDivideService = (req, res) => {
	let x = Number(req.params.x);
	let y = Number(req.params.y);
	const divide = (x, y) => x / y;
	res.json({ divide_result: divide(x, y) });
};

const getModulusService = (req, res) => {
	let x = Number(req.params.x);
	let y = Number(req.params.y);
	const modulus = (x, y) => x % y;
	res.json({ modulus_result: modulus(x, y) });
};

const getAreaOfCircleService = (req, res) => {
	const pi = 3.1416;
	let radius = Number(req.params.r);
	const areaOfCircle = (radius) => pi * radius ** 2;
	res.json({ areaOfCircle_result: areaOfCircle(radius) });
};

const getFeetInchesToCentimeterService = (req, res) => {
	const footIncm = 30.48;
	const inchIncm = 2.54;
	let feet = Number(req.params.f);
	let inches = Number(req.params.i);
	const feetToCm = (feet) => feet * footIncm + 'cm';
	const inchesToCm = (inches) => inches * inchIncm + 'cm';
	res.json({ feetToCentimeter_result: feetToCm(feet), inchesToCentimeter_result: inchesToCm(inches) });
};

export { getAddService, getSubtractService, getMultiplyService, getDivideService, getModulusService, getAreaOfCircleService, getFeetInchesToCentimeterService };
