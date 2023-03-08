import express from 'express';
export const breweriesRouter = express.Router();
import * as BreweryController from '../controllers/breweries'

breweriesRouter.get('/breweries/search', BreweryController.SearchBreweries);

export default breweriesRouter;
