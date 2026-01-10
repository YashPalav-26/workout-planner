import Goal from '../models/Goal.js';
import mongoose from 'mongoose';

// Create a new goal
export const createGoal = async (req, res) => {
    try {
        const { title, description, category, targetValue, unit, targetDate, icon, color } = req.body;
        const userId = req.user.id;

        if (!title || !category || !targetValue) {
            return res.status(400).json({ message: 'Title, category, and target value are required' });
        }

        const goal = new Goal({
            userId,
            title,
            description,
            category,
            targetValue,
            unit,
            targetDate,
            icon: icon || 'flag',
            color: color || 'primary',
        });

        const savedGoal = await goal.save();
        res.status(201).json(savedGoal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating goal', error: error.message });
    }
};

// Get all goals for a user
export const getGoals = async (req, res) => {
    try {
        const userId = req.user.id;
        const { category } = req.query;

        let filter = { userId };
        if (category && category !== 'All') {
            filter.category = category;
        }

        const goals = await Goal.find(filter).sort({ createdAt: -1 });
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goals', error: error.message });
    }
};

// Get a specific goal
export const getGoalById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const goal = await Goal.findOne({ _id: id, userId });
        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goal', error: error.message });
    }
};

// Update a goal
export const updateGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const updates = req.body;

        // Don't allow updating userId
        delete updates.userId;

        const goal = await Goal.findOneAndUpdate({ _id: id, userId }, updates, { new: true });

        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating goal', error: error.message });
    }
};

// Delete a goal
export const deleteGoal = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const goal = await Goal.findOneAndDelete({ _id: id, userId });

        if (!goal) {
            return res.status(404).json({ message: 'Goal not found' });
        }

        res.status(200).json({ message: 'Goal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting goal', error: error.message });
    }
};

// Get goals statistics
export const getGoalsStats = async (req, res) => {
    try {
        const userId = req.user.id;

        const totalGoals = await Goal.countDocuments({ userId });
        const completedGoals = await Goal.countDocuments({ userId, isCompleted: true });
        const overallProgress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

        const goalsByCategory = await Goal.aggregate([
            { $match: { userId: new mongoose.Types.ObjectId(userId) } },
            { $group: { _id: '$category', count: { $sum: 1 } } },
        ]);

        res.status(200).json({
            totalGoals,
            completedGoals,
            overallProgress,
            goalsByCategory,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching goals stats', error: error.message });
    }
};
