import { Router } from 'express';
import { body } from 'express-validator';
import { validate } from '../middlewares/validate';
import * as ctrl from '../controllers/logController';

export const logRoutes = Router();

logRoutes.post(
  '/heart-rate',
  body('userId').isInt(),
  body('bpm').isInt({ min: 30, max: 220 }),
  validate,
  ctrl.logHeartRate
);

logRoutes.post(
  '/steps',
  body('userId').isInt(),
  body('count').isInt({ min: 0 }),
  validate,
  ctrl.logSteps
);

logRoutes.post(
  '/sleep',
  body('userId').isInt(),
  body('hours').isFloat({ min: 0.1, max: 24 }),
  body('quality').isIn(['poor', 'fair', 'good', 'excellent']),
  validate,
  ctrl.logSleep
);

logRoutes.post(
  '/stress',
  body('userId').isInt(),
  body('level').isInt({ min: 1, max: 10 }),
  validate,
  ctrl.logStress
);
