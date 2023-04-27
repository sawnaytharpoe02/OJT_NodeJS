"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDevLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_2 = require("winston");
const { combine, timestamp, errors, colorize } = winston_2.format;
const buildDevLogger = () => {
    const logFormat = winston_2.format.printf(({ level, message, stack, timestamp }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });
    return winston_1.default.createLogger({
        format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
        transports: [new winston_2.transports.Console()],
    });
};
exports.buildDevLogger = buildDevLogger;
