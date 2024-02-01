import { Express, Router } from 'express';
import * as BreweryController from '../controllers/breweries'
import errorHandler from '../middleware/errorHandler';

export const breweriesRouter = Router();

breweriesRouter.route('/')
  .get(BreweryController.BrowseBreweries);

breweriesRouter.route('/search')
  .get(BreweryController.SearchBreweries);

// used to read all breweries in breweriesDBList and put them into MongoDB
// breweriesRouter.get('/brewery-seed', BreweryController.seedDb);

export default (app: Express) => app.use('/breweries', breweriesRouter);
