"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = exports.edit = exports.get = exports.add = exports.all = void 0;
const userService_1 = require("../services/userService");
const all = (req, res, next) => {
    (0, userService_1.findAllUserService)(req, res, next);
};
exports.all = all;
const add = (req, res, next) => {
    (0, userService_1.createUserService)(req, res, next);
};
exports.add = add;
const get = (req, res, next) => {
    (0, userService_1.findUserService)(req, res, next);
};
exports.get = get;
const edit = (req, res, next) => {
    (0, userService_1.editUserService)(req, res, next);
};
exports.edit = edit;
const drop = (req, res, next) => {
    (0, userService_1.deleteUserService)(req, res, next);
};
exports.drop = drop;
