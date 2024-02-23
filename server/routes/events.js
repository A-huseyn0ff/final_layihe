import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEventById, deleteEventById } from '../controller/events.js';

const router = express.Router();

// Route to create a new event
router.post('/events', createEvent);

// Route to get all events
router.get('/events', getAllEvents);

// Route to get a single event by ID
router.get('/events/:id', getEventById);

// Route to update an event by ID
router.put('/events/:id', updateEventById);

// Route to delete an event by ID
router.delete('/events/:id', deleteEventById);

export default router;
