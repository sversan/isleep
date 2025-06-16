import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db';
import { overviewRoute } from './routes/overviewRoute';

dotenv.config();
const app = express();
app.use(cors(), express.json());

app.use('/api', overviewRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

import { sleepRoutes } from './routes/sleepRoutes';
import { stressRoutes } from './routes/stressRoutes';

app.use('/api/sleep', sleepRoutes);
app.use('/api/stress', stressRoutes);