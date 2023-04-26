"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
exports.userRouter = router;
router.get('/', userController_1.GetAllUsers);
router.route('/:id').get(userController_1.GetUser);
