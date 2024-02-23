import express from 'express';
import {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
} from '../controller/category.js';

const router = express.Router();

// Routes for categories
router.post('/categories', createCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', updateCategoryById);
router.delete('/categories/:id', deleteCategoryById);

export default router;