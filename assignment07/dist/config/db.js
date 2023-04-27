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
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("../logger");
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.DB_URI) {
            throw new Error('DB_URI is not defined in the environment variables');
        }
        yield mongoose_1.default.connect(process.env.DB_URI);
        logger_1.logger.info('connected to the database');
    }
    catch (err) {
        logger_1.logger.error(err, 'could not connect to database');
    }
});
exports.default = connection;
