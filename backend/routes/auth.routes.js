import express from 'express';
import { register, login, getUser } from '../controllers/authController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register new user
// @access  Public
router.post('/signup', register);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

// @route   GET /api/auth/user
// @desc    Get current user
// @access  Private
router.get('/user', auth, getUser);

export default router;
