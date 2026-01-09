import express from 'express';
import auth from '../middleware/auth.js';
import {
    getTodayMetrics,
    getWeeklyMetrics,
    getMonthlyMetrics,
    getDashboardStats,
    updateWeight,
} from '../controllers/metricsController.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Get various metrics - specific routes BEFORE general ones
router.get('/dashboard', getDashboardStats);
router.get('/today', getTodayMetrics);
router.get('/weekly', getWeeklyMetrics);
router.get('/monthly', getMonthlyMetrics);

// Update metrics
router.put('/weight', updateWeight);

export default router;
