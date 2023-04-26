"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Unknown error occured';
    const stack = err.stack;
    const response = {
        condition: false,
        message,
        stack,
    };
    if (status >= 500) {
        console.log(err);
    }
    res.status(status).json(response);
};
exports.errorHandler = errorHandler;
