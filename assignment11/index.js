import dotenv from 'dotenv';
import express from 'express';
import fileUpload from 'express-fileupload';
import path from 'path';

dotenv.config();
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const fileOptions = {
	limits: {
		fileSize: 1024 * 1024,
	},
	abortOnLimit: false,
};
app.use(fileUpload(fileOptions));

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/', (req, res) => {
	if (!req.files) {
		return res.status(400).send('No files were uploaded.');
	}
	const file = req.files.file;

	// validating file requirements -> not allow .png in my format
	const allowedExtensions = ['.jpg', '.jpeg', '.gif'];
	const extension = path.extname(file.name);
	if (!allowedExtensions.includes(extension)) {
		return res
			.status(400)
			.send('Only ' + allowedExtensions.join(', ') + ' files are allowed.');
	}

	// limitate the user upload file size
	if (file.size > fileOptions.limits.fileSize) {
		return res
			.status(400)
			.send(
				`File size should not exceed ${fileOptions.limits.fileSize} bytes.`
			);
	}

	// added unique number for duplicate image
	const filename = new Date().valueOf() + '_' + file.name;
	const filePath = `./uploads/${filename}`;

	file.mv(filePath, (err) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.send(`your file (${filename}) successfully uploaded!`);
	});
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
