"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
class CustomErrorHandler extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.CustomErrorHandler = CustomErrorHandler;
function errorHandler(error, _req, res, next) {
    if (error.status === 404) {
        res.status(404).json({ message: error.message });
    }
    else if (error.status === 400) {
        res.status(400).json({ message: error.message });
    }
    else {
        res.status(500);
    }
}
exports.default = errorHandler;
