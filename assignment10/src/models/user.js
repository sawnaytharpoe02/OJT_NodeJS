import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	name: {
		type: String,
		required: [true, 'please add name'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'please add email'],
		unique: true,
	},
	password: { type: String, required: [true, 'please add password'] },
	createdAt: { type: Date, default: Date.now() },
});

const User = mongoose.model('user', UserSchema);

export default User;
