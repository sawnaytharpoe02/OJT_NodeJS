"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostService = exports.editPostService = exports.findPostService = exports.createPostService = exports.findAllPostService = void 0;
const post_1 = __importDefault(require("../models/post"));
const helper_1 = __importDefault(require("../helpers/helper"));
const findAllPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.find().populate('user', '-__v -password').sort({ createdAt: -1 });
        (0, helper_1.default)(res, 'Get All Posts', posts);
    }
    catch (error) {
        next(error);
    }
});
exports.findAllPostService = findAllPostService;
const createPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield new post_1.default(req.body).save();
        (0, helper_1.default)(res, 'Added New Post', [post]);
    }
    catch (error) {
        next(error);
    }
});
exports.createPostService = createPostService;
const findPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_1.default.findById(req.params.id);
        if (post) {
            const getPost = yield post_1.default.findById(post._id).populate('user');
            (0, helper_1.default)(res, 'Get Single Post', [getPost]);
        }
        else {
            next(new Error('There is no post with this id'));
        }
    }
    catch (error) {
        next(error);
    }
});
exports.findPostService = findPostService;
const editPostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_1.default.findById(req.params.id);
        if (post) {
            yield post_1.default.findByIdAndUpdate(post._id, req.body);
            const editPost = yield post_1.default.findById(post._id).populate('user');
            (0, helper_1.default)(res, 'Post Updated', [editPost]);
        }
        else {
            next(new Error('There is no post with this id to edit'));
        }
    }
    catch (error) {
        next(error);
    }
});
exports.editPostService = editPostService;
const deletePostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_1.default.findById(req.params.id);
        if (post) {
            yield post_1.default.findByIdAndDelete(post._id);
            (0, helper_1.default)(res, 'Deleted Post');
        }
        else {
            next(new Error('There is no post with this id to delete'));
        }
    }
    catch (error) {
        next(error);
    }
});
exports.deletePostService = deletePostService;
