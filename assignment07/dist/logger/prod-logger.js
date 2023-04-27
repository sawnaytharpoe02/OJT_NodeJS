"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildProductionLogger = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_2 = require("winston");
const { combine, timestamp, json, errors } = winston_2.format;
const buildProductionLogger = () => {
    return winston_1.default.createLogger({
        format: combine(timestamp(), json(), errors({ stack: true })),
        defaultMeta: { service: 'user-service' },
        transports: [new winston_2.transports.Console()],
    });
};
exports.buildProductionLogger = buildProductionLogger;
