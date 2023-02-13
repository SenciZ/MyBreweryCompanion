import express from 'express';
export const breweryRouter = express.Router();
const BreweryController = require('../controllers/getBreweriesController')

breweryRouter.get('/user', BreweryController.populateDB);

module.exports = breweryRouter;
