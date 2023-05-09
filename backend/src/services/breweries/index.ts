import { BreweryModel } from "../../models/brewery";
import { Request, Response, NextFunction  } from "express";
import { CustomErrorHandler } from "../../middleware/errorHandler";

export const SearchAllBreweries = async (req: Request, res: Response, next: NextFunction) => {
  const searchName = req.query.name;
  const searchPage: number = +req.query.page-1;
  if (!searchName) {
      const error = new CustomErrorHandler('Please provide a search keyword', 400);
      return next(error);
  }

  const searchRegex = new RegExp(`${searchName}`, 'i')

  const results = await BreweryModel.find( { $or: [ { name: searchRegex }, { city: searchRegex }, {state: searchRegex } , { zip: searchRegex } ] }).sort().limit(10).skip(searchPage*10);
  return res.json(results);
};