// src/controllers/overviewController.ts
import { Request, Response } from 'express';
import pool from '../db';

export const getOverview = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    const { rows: hrRows } = await pool.query(
      'SELECT bpm FROM heart_rate WHERE user_id = $1 AND recorded_at::date = CURRENT_DATE',
      [userId]
    );
    const { rows: stepRows } = await pool.query(
      'SELECT count FROM steps WHERE user_id = $1 AND recorded_at = CURRENT_DATE',
      [userId]
    );
    const { rows: sleepRows } = await pool.query(
      'SELECT hours, quality FROM sleep WHERE user_id = $1 AND recorded_at = CURRENT_DATE',
      [userId]
    );
    const { rows: stressRows } = await pool.query(
      'SELECT level FROM stress WHERE user_id = $1 AND recorded_at::date = CURRENT_DATE',
      [userId]
    );

    res.json({
      heartRate: hrRows.map(r => r.bpm).pop() ?? null,
      steps: stepRows.map(r => r.count).pop() ?? 0,
      sleep: sleepRows.map(r => ({ hours: r.hours, quality: r.quality })).pop() ?? null,
      stress: stressRows.map(r => r.level).pop() ?? null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
