import QuotesModel from '../models/quote.js';

const quotesModel = new QuotesModel();

const getAllQuotes = async (req, res) => {
	try {
		await quotesModel.connect();
		const quotes = await quotesModel.getAll();
		res.render('index', { quotes: quotes });
	} catch (error) {
		console.error(error);
	} finally {
		await quotesModel.close();
	}
};

const addQuote = async (req, res) => {
	try {
		await quotesModel.connect();
		await quotesModel.create(req.body);
		res.redirect('/quotes');
	} catch (error) {
		console.error(error);
	} finally {
		await quotesModel.close();
	}
};

const updateQuote = async (req, res) => {
	try {
		await quotesModel.connect();
		await quotesModel.update('Yoda', req.body.name, req.body.quote);
		res.json('Success');
	} catch (error) {
		console.error(error);
	} finally {
		await quotesModel.close();
	}
};

const deleteQuote = async (req, res) => {
	try {
		await quotesModel.connect();
		const result = await quotesModel.delete(req.body.name);
		if (result.deletedCount === 0) {
			return res.json('No quote to delete');
		}
		res.json(`Deleted ${req.body.name}'s quote`);
	} catch (error) {
		console.error(error);
	} finally {
		await quotesModel.close();
	}
};

export { getAllQuotes, addQuote, updateQuote, deleteQuote };
