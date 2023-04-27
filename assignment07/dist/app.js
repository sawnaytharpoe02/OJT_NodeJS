"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const userRoute_1 = require("./routes/userRoute");
const error_1 = require("./middlewares/error");
const logger_1 = require("./logger");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', userRoute_1.userRouter);
logger_1.logger.warn('warn');
logger_1.logger.info('this is info');
logger_1.logger.error('hey something wrong');
logger_1.logger.error(new Error('something went wrong'));
const port = process.env.PORT;
(0, db_1.default)().then(() => {
    app.listen(port, () => {
        logger_1.logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
    app.use(error_1.errorHandler);
});
