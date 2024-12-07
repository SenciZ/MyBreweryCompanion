import { BreweryModel, IBrewery } from "../models/brewery";
import { Request, Response, NextFunction } from "express";
import { CustomErrorHandler } from "../middleware/errorHandler";
import * as BreweryService from '../services/breweries/index';

export const SearchBreweries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchResults: any = await BreweryService.SearchAllBreweries(req, res, next);

        if (searchResults.length > 0) {
            res.json(searchResults);
        } else {
            const error = new CustomErrorHandler('No Breweries Found', 404);
            return next(error);
        }
    } catch (error) {
        next(error);
    }
}

export const BrowseBreweries = async (req: Request, res: Response, next: NextFunction) => {
    const searchPage: number = +req.query.page - 1;
    try {
        const searchResults = await BreweryModel.find().sort().limit(10).skip(searchPage * 10);

        if (searchResults.length > 0) {
            res.json(searchResults);
        } else {
            const error = new CustomErrorHandler('No Breweries Found', 404);
            return next(error);
        }
    } catch (error) {
        next(error);
    }
}

// // used to read all breweries in breweriesDBList and put them into MongoDB
// export const seedDb = async (req, res) => {
//     breweriesDBList.forEach(async (brewery: any) => {
//         await new BreweryModel({
//             name: brewery.name,
//             street: brewery.street,
//             address2: brewery.address2,
//             city: brewery.city,
//             state: brewery.state,
//             zip: brewery.postal_code,
//             country: brewery.country,
//             longitude: brewery.longitude,
//             latitude: brewery.latitude,
//             phone: brewery.phone,
//             website: brewery.website_url,
//         }).save();
//     })
// }