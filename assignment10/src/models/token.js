import mongoose, { Schema, model, mongo } from 'mongoose';

const TokenSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});

const Token = mongoose.model('token', TokenSchema);

export default Token;
