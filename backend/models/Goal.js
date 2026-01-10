import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Cardio', 'Strength', 'Nutrition', 'Habits', 'Flexibility'],
        required: true,
    },
    icon: {
        type: String,
        default: 'flag',
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    targetDate: {
        type: Date,
    },
    currentValue: {
        type: Number,
        default: 0,
    },
    targetValue: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        default: '%',
    },
    color: {
        type: String,
        default: 'primary',
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

export default mongoose.model('Goal', GoalSchema);
