import apiClient from './axiosConfig.js';

// Create Workout
export const createWorkout = async (workoutData) => {
    const response = await apiClient.post('/workouts', workoutData);
    return response.data;
};

// Get All Workouts
export const getWorkouts = async (filters) => {
    const response = await apiClient.get('/workouts', {
        params: filters,
    });
    return response.data;
};

// Get Workouts by Date
export const getWorkoutsByDate = async (date) => {
    const response = await apiClient.get('/workouts', {
        params: { date },
    });
    return response.data;
};

// Get Workouts by Month
export const getWorkoutsByMonth = async (month, year) => {
    const response = await apiClient.get('/workouts', {
        params: { month, year },
    });
    return response.data;
};

// Get Workout by ID
export const getWorkoutById = async (id) => {
    const response = await apiClient.get(`/workouts/${id}`);
    return response.data;
};

// Update Workout
export const updateWorkout = async (id, updates) => {
    const response = await apiClient.put(`/workouts/${id}`, updates);
    return response.data;
};

// Delete Workout
export const deleteWorkout = async (id) => {
    const response = await apiClient.delete(`/workouts/${id}`);
    return response.data;
};

// Get Recent Workouts
export const getRecentWorkouts = async (limit = 5) => {
    const response = await apiClient.get('/workouts', {
        params: { limit },
    });
    return response.data;
};
