"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatMessage = (res, msg = 'success', result = []) => {
    res.status(200).json({
        con: true,
        msg,
        result,
    });
};
exports.default = formatMessage;
