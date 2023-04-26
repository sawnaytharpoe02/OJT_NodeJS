"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = exports.GetAllUsers = void 0;
const userService_1 = require("../services/userService");
const resMessage_1 = __importDefault(require("../utils/resMessage"));
const GetAllUsers = (req, res, next) => {
    try {
        const users = (0, userService_1.QureyListOfUsers)();
        (0, resMessage_1.default)(res, 'Get All Users Successfully', [users]);
    }
    catch (error) {
        next(error);
    }
};
exports.GetAllUsers = GetAllUsers;
const GetUser = (req, res, next) => {
    try {
        const user = (0, userService_1.QueryUserById)(req.params.id);
        (0, resMessage_1.default)(res, `Get User Id ${req.params.id}`, [user]);
    }
    catch (error) {
        next(error);
    }
};
exports.GetUser = GetUser;
