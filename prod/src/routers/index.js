"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const breweries_1 = __importDefault(require("./breweries"));
const routers = (app) => {
    (0, breweries_1.default)(app);
    return app;
};
exports.default = routers;
