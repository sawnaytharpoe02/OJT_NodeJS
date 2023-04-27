import { MongoClient } from 'mongodb';

const dbName = 'star-wars-quotes';
const uri =
	'mongodb+srv://sawnaytharhpoe02:Wss2YnfJt26McJoS@cluster0.z9unfgd.mongodb.net/test';

class QuotesModel {
	async connect() {
		this.client = await MongoClient.connect(uri, {
			useUnifiedTopology: true,
		});
		this.db = this.client.db(dbName);
		this.collection = this.db.collection('quotes');
	}

	async getAll() {
		return await this.collection.find().toArray();
	}

	async create(quote) {
		return await this.collection.insertOne(quote);
	}

	async update(ed_name, name, quote) {
		return await this.collection.findOneAndUpdate(
			{ name: ed_name },
			{
				$set: {
					name: name,
					quote: quote,
				},
			},
			{ upsert: true }
		);
	}

	async delete(name) {
		return await this.collection.deleteOne({ name: name });
	}

	async close() {
		await this.client.close();
	}
}

export default QuotesModel;
