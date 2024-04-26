import { body } from 'express-validator';
import validateResult from '../helpers/ValidationResult';
import { Request, Response, NextFunction } from 'express';

export const registerValidation = [
 body('name')
 .optional({ checkFalsy: true })
 .isString()
 .isLength({ max: 50 })
 .withMessage('Name must be less than 50 characters'),

 body('lastname')
 .optional({ checkFalsy: true })
 .isString()
 .isLength({ max: 50 })
 .withMessage('Name must be less than 50 characters'),

 body('email')
 .notEmpty()
 .withMessage('email is required')
 .isEmail()
 .isLength({ max: 100 }).withMessage('Email must be less than 100 characters'),

 body('password')
 .notEmpty()
 .withMessage('this field can not be empty')
 .isString()
 .isLength({ min: 8, max: 50 })
 .withMessage('Password must be between 8 and 50 characters long')
 .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one digit')
    .matches(/[^a-zA-Z0-9]/).withMessage('Password must contain at least one special character'),

 (req: Request, res: Response, next: NextFunction) =>{
   validateResult(req, res, next)
}
];