import express from 'express';
export const userRouter = express.Router();
import * as userController from '../controllers/user';

userRouter.get('/register', (req, res) => {
    console.log('Register')
});

userRouter.get('/user', userController.userRegister);
userRouter.post('/user', userController.userSave);

