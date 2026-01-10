import Workout from '../models/Workout.js';
import UserMetrics from '../models/UserMetrics.js';

// Create a new workout
export const createWorkout = async (req, res) => {
    try {
        const { name, type, description, scheduledDate, startTime, duration, exercises, caloriesBurned, distance, distanceUnit, notes } = req.body;
        const userId = req.user.id;

        if (!name || !type || !scheduledDate || !startTime || !duration) {
            return res.status(400).json({ message: 'Name, type, scheduled date, start time, and duration are required' });
        }

        const workout = new Workout({
            userId,
            name,
            type,
            description,
            scheduledDate,
            startTime,
            duration,
            exercises,
            caloriesBurned,
            distance,
            distanceUnit: distanceUnit || 'km',
            notes,
        });

        const savedWorkout = await workout.save();
        res.status(201).json(savedWorkout);
    } catch (error) {
        res.status(500).json({ message: 'Error creating workout', error: error.message });
    }
};

// Get all workouts for a user with optional filtering
export const getWorkouts = async (req, res) => {
    try {
        const userId = req.user.id;
        const { date, month, year, status, limit } = req.query;

        let filter = { userId };

        if (date) {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);

            filter.scheduledDate = { $gte: startOfDay, $lte: endOfDay };
        } else if (month && year) {
            const startOfMonth = new Date(year, month - 1, 1);
            const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

            filter.scheduledDate = { $gte: startOfMonth, $lte: endOfMonth };
        }

        if (status) {
            filter.status = status;
        }

        let query = Workout.find(filter).sort({ scheduledDate: 1, startTime: 1 });

        if (limit) {
            query = query.limit(parseInt(limit));
        }

        const workouts = await query;
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error: error.message });
    }
};

// Get a specific workout
export const getWorkoutById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const workout = await Workout.findOne({ _id: id, userId });
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workout', error: error.message });
    }
};

// Update a workout
export const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const updates = req.body;

        delete updates.userId;

        if (updates.status === 'completed' && !updates.completedAt) {
            updates.completedAt = new Date();
        }

        const workout = await Workout.findOneAndUpdate({ _id: id, userId }, updates, { new: true });

        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        // Update user metrics if workout is completed
        if (updates.status === 'completed') {
            await updateUserMetrics(userId, workout);
        }

        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ message: 'Error updating workout', error: error.message });
    }
};

// Delete a workout
export const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const workout = await Workout.findOneAndDelete({ _id: id, userId });

        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting workout', error: error.message });
    }
};

// Helper function to update user metrics
const updateUserMetrics = async (userId, workout) => {
    try {
        const workoutDate = new Date(workout.scheduledDate);
        workoutDate.setHours(0, 0, 0, 0);

        let metrics = await UserMetrics.findOne({ userId, date: workoutDate });

        if (!metrics) {
            metrics = new UserMetrics({
                userId,
                date: workoutDate,
            });
        }

        metrics.workoutsCompleted += 1;
        metrics.activeMinutes += workout.duration || 0;
        if (workout.caloriesBurned) {
            metrics.caloriesBurned += workout.caloriesBurned;
        }
        metrics.updatedAt = new Date();

        await metrics.save();
    } catch (error) {
        console.error('Error updating user metrics:', error);
    }
};

// Get recent workouts (for dashboard)
export const getRecentWorkouts = async (req, res) => {
    try {
        const userId = req.user.id;
        const { limit = 5 } = req.query;

        const workouts = await Workout.find({ userId })
            .sort({ scheduledDate: -1 })
            .limit(parseInt(limit));

        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recent workouts', error: error.message });
    }
};
