"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_2 = require("winston");
const logFormat = winston_2.format.printf(({ level, message, stack, timestamp }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const logger = winston_1.default.createLogger({
    transports: [new winston_2.transports.Console()],
    format: winston_2.format.combine(winston_2.format.colorize(), winston_2.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_2.format.json(), winston_2.format.errors({ stack: true }), logFormat),
});
exports.logger = logger;
