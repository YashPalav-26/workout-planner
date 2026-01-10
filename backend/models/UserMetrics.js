import mongoose from 'mongoose';

const UserMetricsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    caloriesBurned: {
        type: Number,
        default: 0,
    },
    activeMinutes: {
        type: Number,
        default: 0,
    },
    weight: {
        type: Number,
    },
    workoutsCompleted: {
        type: Number,
        default: 0,
    },
    goalsCompleted: {
        type: Number,
        default: 0,
    },
    currentStreak: {
        type: Number,
        default: 0,
    },
    longestStreak: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Compound index to ensure one metric per user per day
UserMetricsSchema.index({ userId: 1, date: 1 }, { unique: true });

export default mongoose.model('UserMetrics', UserMetricsSchema);
