const uploadFile = (req, res, next) => {
	if (!req.files) {
		next(new Error('No file was uploaded.'));
	}
	const file = req.files.file;
	const filename = new Date().valueOf() + '_' + file.name;
	file.mv(`./uploads/${filename}`);
	req.body['image'] = filename;
	next();
};

const uploadMultiFile = (req, res, next) => {
	if (!req.files) {
		next(new Error('No files were uploaded'));
	}

	const files = req.files.files;
	let allFiles = [];
	files.forEach((file) => {
		const filename = new Date().valueOf() + '_' + file.name;
		file.mv(`./uploads/${filename}`);
		allFiles.push(filename);
	});

	req.body['images'] = allFiles;
	next();
};
