import { Response, Request, NextFunction, ErrorRequestHandler } from "express";

export class CustomErrorHandler extends Error{
    status: number;

    constructor(message: string, status: number){
        super(message);
        this.status = status;
    }
}

export default function errorHandler(error: CustomErrorHandler, _req: Request, res: Response, next: NextFunction) {
        if (error.status === 404) {
            res.status(404).json({message: error.message});
        } else if (error.status === 400) {
            res.status(400).json({message: error.message})
        } else {
            res.status(500);
        }
}