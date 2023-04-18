const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	let username = '';
	let password = '';
	try {
		const readStream = fs.createReadStream('./public/user.txt', { encoding: 'utf-8' });
		readStream.on('data', (chunk) => {
			const userData = JSON.parse(chunk);
			username = userData.username;
			password = userData.password;
		});
		readStream.on('error', (err) => {
			console.error(err);
		});
		readStream.on('end', () => {
			res.render('index', { username, password });
		});
	} catch (err) {
		console.error(err);
		res.render('index', { username, password });
	}
});

app.post('/', (req, res) => {
	const { username, password } = req.body;
	const user_data = JSON.stringify({ username, password });

	fs.appendFile('./public/user.txt', `${user_data}\n`, (err) => {
		if (err) {
			console.error(err);
			res.render('index', { username, errorMessage: 'Error creating user. Please try again.' });
		} else {
			res.render('index', { username, successMessage: `User "${username}" has been created.`, password });
		}
	});
});

app.get('/css/style.css', (req, res) => {
	res.type('text/css');
	res.sendFile('./views/css/style.css', { root: __dirname });
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
