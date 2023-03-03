import express, { Express, Request, Response } from "express";
import * as userController from '../controllers/user';

const router = express.Router();

router.post('/register', userController.userSave);

module.exports = router;
