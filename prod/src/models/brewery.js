"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreweryModel = void 0;
const mongoose_1 = require("mongoose");
const Brewery = new mongoose_1.Schema({
    name: { type: String },
    street: { type: String },
    address2: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
    longitude: { type: String },
    latitude: { type: String },
    phone: { type: String },
    website: { type: String },
    logoUrl: { type: String },
});
exports.BreweryModel = (0, mongoose_1.model)('breweries', Brewery);
