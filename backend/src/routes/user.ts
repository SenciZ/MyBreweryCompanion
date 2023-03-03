import express, { Express, Request, Response } from "express";
import * as userController from '../controllers/user';

const userRouter = express.Router();

userRouter.post('/register', userController.userSave);

export default userRouter;
