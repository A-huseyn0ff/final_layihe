// routes/seatsRoutes.js

import express from 'express';
import { getSeats, createSeat, updateSeat, deleteSeat } from '../controller/place.js';

const router = express.Router();

router.get('/api/seats', getSeats);
router.post('/api/seats', createSeat);
router.put('/api/seats/:id', updateSeat);
router.delete('/api/seats/:id', deleteSeat);

export default router;