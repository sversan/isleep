import axios from 'axios';

export const logHeartRate = (userId: number, bpm: number) =>
  axios.post('/api/heart-rate', { userId, bpm });

export const logSteps = (userId: number, count: number) =>
  axios.post('/api/steps', { userId, count });

export const logSleep = (userId: number, hours: number, quality: string) =>
  axios.post('/api/sleep', { userId, hours, quality });

export const logStress = (userId: number, level: number) =>
  axios.post('/api/stress', { userId, level });
