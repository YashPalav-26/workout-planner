import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Cardio', 'Strength', 'Flexibility', 'Sports', 'Recovery'],
        required: true,
    },
    description: {
        type: String,
    },
    scheduledDate: {
        type: Date,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    exercises: [
        {
            name: String,
            sets: Number,
            reps: Number,
            weight: Number,
            unit: String,
        },
    ],
    caloriesBurned: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    distanceUnit: {
        type: String,
        default: 'km',
    },
    notes: {
        type: String,
    },
    status: {
        type: String,
        enum: ['scheduled', 'completed', 'missed', 'cancelled'],
        default: 'scheduled',
    },
    completedAt: {
        type: Date,
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

export default mongoose.model('Workout', WorkoutSchema);
