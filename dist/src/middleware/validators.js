import { param } from 'express-validator';

export const validateCityName = param('city')
  .isString()
  .isIn(['london', 'dublin'])
  .withMessage('City Name must be either london or dublin');
