import { Request, Response, NextFunction } from 'express';
import Post from '../models/post';
import formatMessage from '../helpers/helper';
import { format } from 'path';

const findAllPostService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const posts = await Post.find().populate('user', '-__v -password').sort({ createdAt: -1 });
		formatMessage(res, 'Get All Posts', posts);
	} catch (error) {
		next(error);
	}
};

const createPostService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const post = await new Post(req.body).save();
		formatMessage(res, 'Added New Post', [post]);
	} catch (error) {
		next(error);
	}
};

const findPostService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post) {
			const getPost: any = await Post.findById(post._id).populate('user');
			formatMessage(res, 'Get Single Post', [getPost]);
		} else {
			next(new Error('There is no post with this id'));
		}
	} catch (error) {
		next(error);
	}
};

const editPostService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post) {
			await Post.findByIdAndUpdate(post._id, req.body);
			const editPost: any = await Post.findById(post._id).populate('user');
			formatMessage(res, 'Post Updated', [editPost]);
		} else {
			next(new Error('There is no post with this id to edit'));
		}
	} catch (error) {
		next(error);
	}
};

const deletePostService = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post) {
			await Post.findByIdAndDelete(post._id);
			formatMessage(res, 'Deleted Post');
		} else {
			next(new Error('There is no post with this id to delete'));
		}
	} catch (error) {
		next(error);
	}
};

export {
	findAllPostService,
	createPostService,
	findPostService,
	editPostService,
	deletePostService,
};
