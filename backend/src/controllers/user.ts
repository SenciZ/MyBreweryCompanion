import { Request, Response } from 'express';
import { UserModel } from '../models/user'


   export const userRegister = (req: Request, res:Response) => {
        console.log('Hey from user Controller');
    }
    
    export const userSave = async (req: Request, res: Response) => {
        console.log('hitt')
        const { username, email, password } = req.body;
        const userExists = await UserModel.findOne({ username: username });
        if (userExists) return res.status(404).json( {message: 'Username is taken'});
        const newUser = await new UserModel({username: username, email: email, password: password}).save()
    }
