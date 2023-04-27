"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const dev_logger_1 = require("./dev-logger");
const prod_logger_1 = require("./prod-logger");
let logger = null;
exports.logger = logger;
if (process.env.NODE_ENV !== 'production') {
    exports.logger = logger = (0, dev_logger_1.buildDevLogger)();
}
else {
    exports.logger = logger = (0, prod_logger_1.buildProductionLogger)();
}
