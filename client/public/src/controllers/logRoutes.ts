// routes/logRoutes.ts
import express from 'express';

const router = express.Router();

router.post('/heart-rate', (req, res) => {
  // handle logging heart rate
  res.status(201).json({ message: 'Heart rate logged' });
});

// Add more POST endpoints as needed
router.post('/sleep', (req, res) => {
  res.status(201).json({ message: 'Sleep data logged' });
});

router.post('/stress', (req, res) => {
  res.status(201).json({ message: 'Stress level logged' });
});

router.post('/steps', (req, res) => {
  res.status(201).json({ message: 'Steps data logged' });
});

export { router as logRoutes };
