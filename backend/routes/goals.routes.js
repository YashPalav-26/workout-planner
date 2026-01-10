import express from 'express';
import auth from '../middleware/auth.js';
import {
    createGoal,
    getGoals,
    getGoalById,
    updateGoal,
    deleteGoal,
    getGoalsStats,
} from '../controllers/goalsController.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Specific routes BEFORE :id parameter
router.post('/', createGoal);
router.get('/stats', getGoalsStats);

// General routes
router.get('/', getGoals);
router.get('/:id', getGoalById);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

export default router;
