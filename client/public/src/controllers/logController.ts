import { Request, Response } from 'express';
import pool from '../db';

export async function logHeartRate(req: Request, res: Response) {
  const { userId, bpm } = req.body;
  await pool.query(
    'INSERT INTO heart_rate(user_id, bpm) VALUES ($1, $2)',
    [userId, bpm]
  );
  res.status(201).json({ success: true });
}

export async function logSteps(req: Request, res: Response) {
  const { userId, count } = req.body;
  await pool.query(
    'INSERT INTO steps(user_id, count) VALUES ($1, $2)',
    [userId, count]
  );
  res.status(201).json({ success: true });
}

export async function logSleep(req: Request, res: Response) {
  const { userId, hours, quality } = req.body;
  await pool.query(
    'INSERT INTO sleep(user_id, hours, quality) VALUES ($1, $2, $3)',
    [userId, hours, quality]
  );
  res.status(201).json({ success: true });
}

export async function logStress(req: Request, res: Response) {
  const { userId, level } = req.body;
  await pool.query(
    'INSERT INTO stress(user_id, level) VALUES ($1, $2)',
    [userId, level]
  );
  res.status(201).json({ success: true });
}
