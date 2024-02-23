// controllers/seatsController.js

import {Seat} from '../schema/place.js';

// @desc    Get all seats
// @route   GET /api/seats
// @access  Public
export const getSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new seat
// @route   POST /api/seats
// @access  Public
export const createSeat = async (req, res) => {
    const seat = new Seat(req.body);
    try {
        const newSeat = await seat.save();
        res.status(201).json(newSeat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a seat by ID
// @route   PUT /api/seats/:id
// @access  Public
export const updateSeat = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSeat = await Seat.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSeat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a seat by ID
// @route   DELETE /api/seats/:id
// @access  Public
export const deleteSeat = async (req, res) => {
    try {
        const { id } = req.params;
        await Seat.findByIdAndRemove(id);
        res.status(200).json({ message: 'Seat deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
