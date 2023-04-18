"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = exports.patch = exports.get = exports.add = exports.all = void 0;
const postService_1 = require("../services/postService");
const all = (req, res, next) => {
    (0, postService_1.findAllPostService)(req, res, next);
};
exports.all = all;
const add = (req, res, next) => {
    (0, postService_1.createPostService)(req, res, next);
};
exports.add = add;
const get = (req, res, next) => {
    (0, postService_1.findPostService)(req, res, next);
};
exports.get = get;
const patch = (req, res, next) => {
    (0, postService_1.editPostService)(req, res, next);
};
exports.patch = patch;
const drop = (req, res, next) => {
    (0, postService_1.deletePostService)(req, res, next);
};
exports.drop = drop;
