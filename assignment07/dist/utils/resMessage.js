"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseMessage = (res, message = 'success', data = []) => {
    res.status(200).json({
        condition: true,
        message,
        data,
    });
};
exports.default = responseMessage;
