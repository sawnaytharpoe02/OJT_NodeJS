"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./routes/user"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
mongoose_1.default.connect(`${process.env.DB_NAME}`);
app.use('/users', user_1.default);
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Internal Server Error';
    res.status(err.status).json({
        con: false,
        msg: err.message,
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
