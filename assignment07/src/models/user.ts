import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	name: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true },
	createdAt: { type: Date, default: Date.now() },
});

const User = model('user', UserSchema);

export default User;
