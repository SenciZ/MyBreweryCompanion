"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(error, req, res, next) {
    console.log(error);
    console.log(error.message);
    res.status(404);
    next();
}
exports.default = errorHandler;
