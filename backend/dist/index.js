"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors")); //const cors = require('cors');
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = __importDefault(require("./src/middleware/errorHandler"));
const routers_1 = __importDefault(require("./src/routers"));
const mongo_1 = require("./src/clients/mongo");
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
const MODE = process.env.MODE;
(() => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.static(path_1.default.join(__dirname, "frontend/build")));
    mongoose_1.default.set('strictQuery', true);
    mongo_1.MongoClientConnection.init();
    (0, routers_1.default)(app);
    app.get('/*', (req, res) => res.sendFile(path_1.default.join(__dirname, "frontend/build", 'index.html')));
    app.use(errorHandler_1.default);
    app.listen(PORT, () => console.log(`Listening on port ${PORT} in `, process.env.MODE));
})();
