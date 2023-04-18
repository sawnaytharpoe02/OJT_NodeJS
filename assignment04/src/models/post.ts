import { Schema, model } from 'mongoose';

const PostSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'user' },
		title: { type: String, required: true },
		desc: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Post = model('post', PostSchema);

export default Post;
