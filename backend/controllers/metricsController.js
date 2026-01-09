import UserMetrics from '../models/UserMetrics.js';
import Workout from '../models/Workout.js';
import Goal from '../models/Goal.js';
import mongoose from 'mongoose';

// Get today's metrics
export const getTodayMetrics = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let metrics = await UserMetrics.findOne({ userId, date: today });

        if (!metrics) {
            // Create default metrics if they don't exist
            metrics = new UserMetrics({
                userId,
                date: today,
            });
            await metrics.save();
        }

        res.status(200).json(metrics);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching today metrics', error: error.message });
    }
};

// Get weekly metrics
export const getWeeklyMetrics = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Get last 7 days
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 6);

        const metrics = await UserMetrics.find({
            userId,
            date: { $gte: startDate, $lte: today },
        }).sort({ date: 1 });

        // Fill in missing days with zero values
        const weekMetrics = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            date.setHours(0, 0, 0, 0);

            const foundMetric = metrics.find((m) => {
                const mDate = new Date(m.date);
                mDate.setHours(0, 0, 0, 0);
                return mDate.getTime() === date.getTime();
            });

            weekMetrics.push(
                foundMetric || {
                    date,
                    caloriesBurned: 0,
                    activeMinutes: 0,
                    workoutsCompleted: 0,
                }
            );
        }

        res.status(200).json(weekMetrics);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weekly metrics', error: error.message });
    }
};

// Get monthly metrics
export const getMonthlyMetrics = async (req, res) => {
    try {
        const userId = req.user.id;
        const { month = new Date().getMonth() + 1, year = new Date().getFullYear() } = req.query;

        const startOfMonth = new Date(year, month - 1, 1);
        const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

        const metrics = await UserMetrics.find({
            userId,
            date: { $gte: startOfMonth, $lte: endOfMonth },
        }).sort({ date: 1 });

        // Calculate totals
        const totalCalories = metrics.reduce((sum, m) => sum + (m.caloriesBurned || 0), 0);
        const totalActiveMinutes = metrics.reduce((sum, m) => sum + (m.activeMinutes || 0), 0);
        const totalWorkouts = metrics.reduce((sum, m) => sum + (m.workoutsCompleted || 0), 0);
        const daysActive = metrics.filter((m) => m.workoutsCompleted > 0).length;

        res.status(200).json({
            metrics,
            summary: {
                totalCalories,
                totalActiveMinutes,
                totalWorkouts,
                daysActive,
                month,
                year,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching monthly metrics', error: error.message });
    }
};

// Get dashboard stats
export const getDashboardStats = async (req, res) => {
    try {
        const userId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Today's metrics
        let todayMetrics = await UserMetrics.findOne({ userId, date: today });
        if (!todayMetrics) {
            todayMetrics = {
                caloriesBurned: 0,
                activeMinutes: 0,
                workoutsCompleted: 0,
            };
        }

        // Weekly data
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 6);

        const weeklyMetrics = await UserMetrics.find({
            userId,
            date: { $gte: startDate, $lte: today },
        }).sort({ date: 1 });

        // Weekly data for chart
        const chartData = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            date.setHours(0, 0, 0, 0);

            const foundMetric = weeklyMetrics.find((m) => {
                const mDate = new Date(m.date);
                mDate.setHours(0, 0, 0, 0);
                return mDate.getTime() === date.getTime();
            });

            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
            chartData.push({
                day: dayName,
                activeMinutes: foundMetric?.activeMinutes || 0,
                caloriesBurned: foundMetric?.caloriesBurned || 0,
            });
        }

        // Get goals progress
        const totalGoals = await Goal.countDocuments({ userId });
        const completedGoals = await Goal.countDocuments({ userId, isCompleted: true });
        const goalsProgress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

        // Get current streak
        let currentStreak = 0;
        let checkDate = new Date(today);
        while (true) {
            const dayMetrics = weeklyMetrics.find((m) => {
                const mDate = new Date(m.date);
                mDate.setHours(0, 0, 0, 0);
                return mDate.getTime() === checkDate.getTime();
            });

            if (dayMetrics && dayMetrics.workoutsCompleted > 0) {
                currentStreak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }

        res.status(200).json({
            today: todayMetrics,
            weekly: chartData,
            goalsProgress: {
                completed: completedGoals,
                total: totalGoals,
                percentage: goalsProgress,
            },
            streak: currentStreak,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard stats', error: error.message });
    }
};

// Update weight metric
export const updateWeight = async (req, res) => {
    try {
        const userId = req.user.id;
        const { weight, date } = req.body;

        const metricDate = new Date(date || new Date());
        metricDate.setHours(0, 0, 0, 0);

        let metrics = await UserMetrics.findOne({ userId, date: metricDate });
        if (!metrics) {
            metrics = new UserMetrics({ userId, date: metricDate });
        }

        metrics.weight = weight;
        await metrics.save();

        res.status(200).json(metrics);
    } catch (error) {
        res.status(500).json({ message: 'Error updating weight', error: error.message });
    }
};
