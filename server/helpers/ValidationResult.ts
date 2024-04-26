import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from 'express';


const validateResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req)
        result.throw()
        return next()  //que pase al controlador
    } catch(error: any) {
        res.status(400).json({ errors: error.array() });
    }
}
export default validateResult;