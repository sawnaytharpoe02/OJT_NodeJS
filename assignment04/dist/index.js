"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const post_1 = __importDefault(require("./routes/post"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const dbName = process.env.DB_NAME;
app.use(express_1.default.json());
app.use('/api/users', user_1.default);
app.use('/api/posts', post_1.default);
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Internel Server Error';
    res.status(err.status).json({
        con: false,
        msg: err.message,
    });
});
mongoose_1.default.connect(`mongodb://127.0.0.1:27017/${dbName}}`).then(() => {
    console.log('database is connected');
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
});
