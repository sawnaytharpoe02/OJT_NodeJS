"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    title: { type: String, required: true },
    desc: { type: String, required: true },
}, {
    timestamps: true,
});
const Post = (0, mongoose_1.model)('post', PostSchema);
exports.default = Post;
