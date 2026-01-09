import express from 'express';
import auth from '../middleware/auth.js';
import {
    createWorkout,
    getWorkouts,
    getWorkoutById,
    updateWorkout,
    deleteWorkout,
    getRecentWorkouts,
} from '../controllers/workoutsController.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Specific routes BEFORE :id parameter
router.post('/', createWorkout);
router.get('/recent', getRecentWorkouts);

// General routes
router.get('/', getWorkouts);
router.get('/:id', getWorkoutById);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

export default router;
