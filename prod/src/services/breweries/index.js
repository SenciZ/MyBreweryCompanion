"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAllBreweries = void 0;
const brewery_1 = require("../../models/brewery");
const errorHandler_1 = require("../../middleware/errorHandler");
const SearchAllBreweries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const searchName = req.query.name;
    const searchPage = +req.query.page - 1;
    if (!searchName) {
        const error = new errorHandler_1.CustomErrorHandler('Please provide a search keyword', 400);
        return next(error);
    }
    const searchRegex = new RegExp(`${searchName}`, 'i');
    const results = yield brewery_1.BreweryModel.find({ $or: [{ name: searchRegex }, { city: searchRegex }, { state: searchRegex }, { zip: searchRegex }] }).sort().limit(10).skip(searchPage * 10);
    return results;
});
exports.SearchAllBreweries = SearchAllBreweries;
