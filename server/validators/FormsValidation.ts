import { body } from 'express-validator';
import validateResult from '../helpers/ValidationResult';
import { Request, Response, NextFunction } from 'express';

export const newsValidation = [
  body('title')
  .notEmpty()
  .withMessage('A title is require'),

  body('subtitle')
  .optional({ checkFalsy: true })
  .isLength({ max: 1024 }),

  body('content')
  .notEmpty()
  .withMessage('You must write your News here'),

  body('date')
  .notEmpty()
  .isDate()
  .withMessage('A date is required'),

  body('category')
  .optional({ checkFalsy: true })
  .isString()
  .isLength({ max: 255 }),

  body('image')
  .notEmpty()
  .isURL()
  .withMessage('An url is required'),

  (req: Request, res: Response, next: NextFunction) =>{
    validateResult(req, res, next)
  }
];