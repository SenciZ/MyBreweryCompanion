import express from 'express';
export const breweriesRouter = express.Router();
import * as BreweryController from '../controllers/breweries'

breweriesRouter.get('/brewery-search', BreweryController.SearchBrewery);

// used to read all breweries in breweriesDBList and put them into MongoDB
// breweriesRouter.get('/brewery-seed', BreweryController.seedDb);

export default breweriesRouter;
