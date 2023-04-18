"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = require("../controllers/post");
const postRouter = express_1.default.Router();
postRouter.get('/', post_1.all);
postRouter.post('/', post_1.add);
postRouter.route('/:id').get(post_1.get).patch(post_1.patch).delete(post_1.drop);
exports.default = postRouter;
