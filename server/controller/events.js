import mongoose from 'mongoose';
import {Event} from '../schema/events.js';
import { Category } from '../schema/category.js';
import cloudinary from '../utils/cloudinary.js';
import upload from "../middleware/multer.js";

// Controller function to get all events

export const createEvent = async (req, res) => {
    try {
        upload.fields([
            { name: "mainJPG" },
            { name: "bgImage" },
            { name: "detailImage" }
        ])(req, res, async (err) => {
            // Handling file upload error
            if (err) {
                console.error(err);
                return res.status(400).json({ message: err.message });
            }

            try {
                // Destructure event data from request body
                const { seats,category, name, time, about, aboutplace, languageandage, ticketsRemain, ticketsSold, isActive } = req.body;

                // Extract uploaded images from request
                const MainimageResult = req.files?.["mainJPG"][0];
                const DetailImageResult = req.files?.["detailImage"][0];
                const BgimageResult = req.files?.["bgImage"][0];

                // Upload images to Cloudinary
                const [MainimageResponse, DetailImageResponse, BgImageResponse] = await Promise.all([
                    cloudinary.uploader.upload(MainimageResult?.path, { folder: "images" }) ,
                    cloudinary.uploader.upload(DetailImageResult?.path, { folder: "images" }) ,
                    cloudinary.uploader.upload(BgimageResult?.path, { folder: "images" }) 
                ]);

                // Map category IDs from category names
                const categoryObjects = await Category.find({ categoryName: { $in: category } });
                const categoryIds = categoryObjects.map((categoryObj) => categoryObj?._id);

                // Create new event object with uploaded image URLs
                const newEvent = new Event({
                    mainJPG: MainimageResponse?.secure_url,
                    bgImage: BgImageResponse?.secure_url,
                    detailImage: DetailImageResponse?.secure_url,
                    category: categoryIds,
                    name,
                    time,
                    about,
                    aboutplace,
                    languageandage,
                    ticketsRemain,
                    ticketsSold,
                    isActive,
                    seats
                });

                // Save new event to the database
                await newEvent.save();

                // Update categories to include the new event ID
                await Category.updateMany(
                    { _id: { $in: categoryIds } },
                    { $push: { events: newEvent } }
                );

                // Send success response with created event details
                res.status(201).send(newEvent);
            } catch (error) {
                // Handle any asynchronous errors
                console.error(error);
                res.status(500).json({ message: "An error occurred while creating the event." });
            }
        });
    } catch (error) {
        // Handle any synchronous errors
        console.error(error);
        res.status(500).json({ message: "An error occurred while processing the request." });
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('category').populate('seats');
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single event by ID
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('category').populate('seats');
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update an event by ID
export const updateEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        Object.assign(event, req.body);
        await event.save();
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete an event by ID
export const deleteEventById = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        // await event.remove();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



