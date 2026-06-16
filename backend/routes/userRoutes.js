import express from 'express';
import { getAllUsers, getUserProfile } from '../controllers/userController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, admin, getAllUsers);
router.get('/profile', protect, getUserProfile);

export default router;
