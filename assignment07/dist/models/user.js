"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now() },
});
const User = (0, mongoose_1.model)('user', UserSchema);
exports.default = User;
