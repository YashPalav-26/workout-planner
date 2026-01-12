import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import goalsRoutes from './routes/goals.routes.js';
import workoutsRoutes from './routes/workouts.routes.js';
import metricsRoutes from './routes/metrics.routes.js';

dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Fitness Planner API is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/workouts', workoutsRoutes);
app.use('/api/metrics', metricsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
