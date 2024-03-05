import express from 'express';

import { deleteUser,registerUser,loginUser, editUser, getUserById, getAllUsers, addToWishlist, addToBasket } from '../controller/user.js';
import authenticateToken from '../middleware/auth.js';


const router = express.Router();
router.post('/register', registerUser);
router.post('/login',loginUser);
router.put('/:id', editUser);
router.get('/:id',getUserById);
router.get('/', getAllUsers);
router.post('/:id/wishlist', addToWishlist);
router.delete('/:id',deleteUser)
// Route to add event to user's basket
router.post('/:id/basket', addToBasket);
export default router;

