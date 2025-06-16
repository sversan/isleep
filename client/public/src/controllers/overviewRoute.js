// src/routes/overviewRoute.ts
import { Router } from 'express';
import { getOverview } from '../controllers/overviewController';

export const overviewRoute = Router().get('/user/:id/overview', getOverview);
