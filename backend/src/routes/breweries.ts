import express from 'express';
export const breweriesRouter = express.Router();
import * as BreweryController from '../controllers/breweries'

breweriesRouter.get('/brewery-search', BreweryController.SearchBrewery);

export default breweriesRouter;
