import {Category} from '../schema/category.js';
import {Event} from '../schema/events.js';

export const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.send(category)
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find().populate('events');
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to get a single category by ID with populated events
export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('events');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update a category by ID
export const updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate('events');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        Object.assign(category, req.body);
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to delete a category by ID
export const deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id).populate('events');
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        await category.remove();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

