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
exports.deleteUserService = exports.editUserService = exports.createUserService = exports.findUserService = exports.findAllUserService = void 0;
const user_1 = require("../models/user");
const helper_1 = __importDefault(require("../helpers/helper"));
const findAllUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield user_1.User.find();
        (0, helper_1.default)(res, 'Get all users', [users]);
    }
    catch (err) {
        next(err);
    }
});
exports.findAllUserService = findAllUserService;
const createUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newUser = yield new user_1.User(req.body).save();
        (0, helper_1.default)(res, 'Added new user', [newUser]);
    }
    catch (err) {
        next(err);
    }
});
exports.createUserService = createUserService;
const findUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield user_1.User.findById(req.params.id);
        if (user) {
            (0, helper_1.default)(res, 'Get single user', [user]);
        }
        else {
            next(new Error(`User with id ${req.params.id} not found. Can't get`));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.findUserService = findUserService;
const editUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield user_1.User.findById(req.params.id);
        if (user) {
            yield user_1.User.findByIdAndUpdate(user._id, req.body);
            let editedUser = yield user_1.User.findById(user._id);
            if (editedUser) {
                (0, helper_1.default)(res, 'Edited user successfuly', [editedUser]);
            }
            else {
                next(new Error(`Error editing user with id ${req.params.id}`));
            }
        }
        else {
            next(new Error(`User with id ${req.params.id} not found. Can't edit`));
        }
    }
    catch (err) {
        next(err);
    }
});
exports.editUserService = editUserService;
const deleteUserService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.User.findByIdAndDelete(req.params.id);
        (0, helper_1.default)(res, 'Deleted User Successfully');
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUserService = deleteUserService;
