"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./src/routes/user"));
const breweries_1 = __importDefault(require("./src/routes/breweries"));
const cors_1 = __importDefault(require("cors")); //const cors = require('cors');
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = __importDefault(require("./src/middleware/errorHandler"));
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/build')));
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(process.env.DATABASE_CONNECTION_STRING)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log('Error connecting to databse', err));
app.use('/', user_1.default);
app.use('/breweries', breweries_1.default);
app.get('/*', (req, res) => res.sendFile(path_1.default.join(__dirname, "../../frontend/build", 'index.html')));
app.use(errorHandler_1.default);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
