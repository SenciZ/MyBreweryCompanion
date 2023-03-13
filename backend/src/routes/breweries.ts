import express from 'express';
export const breweriesRouter = express.Router();
import * as BreweryController from '../controllers/breweries'
import errorHandler from '../middleware/errorHandler';

breweriesRouter.get('/search', BreweryController.SearchBreweries);


// used to read all breweries in breweriesDBList and put them into MongoDB
// breweriesRouter.get('/brewery-seed', BreweryController.seedDb);

export default breweriesRouter;
