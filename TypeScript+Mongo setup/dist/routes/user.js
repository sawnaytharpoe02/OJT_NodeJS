"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
router.get('/', user_1.all);
router.post('/', user_1.add);
router.route('/:id').get(user_1.get).patch(user_1.edit).delete(user_1.drop);
exports.default = router;
