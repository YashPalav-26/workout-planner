import apiClient from './axiosConfig.js';

// Create Goal
export const createGoal = async (goalData) => {
    const response = await apiClient.post('/goals', goalData);
    return response.data;
};

// Get All Goals
export const getGoals = async (category) => {
    const response = await apiClient.get('/goals', {
        params: { category },
    });
    return response.data;
};

// Get Goal by ID
export const getGoalById = async (id) => {
    const response = await apiClient.get(`/goals/${id}`);
    return response.data;
};

// Update Goal
export const updateGoal = async (id, updates) => {
    const response = await apiClient.put(`/goals/${id}`, updates);
    return response.data;
};

// Delete Goal
export const deleteGoal = async (id) => {
    const response = await apiClient.delete(`/goals/${id}`);
    return response.data;
};

// Get Goals Statistics
export const getGoalsStats = async () => {
    const response = await apiClient.get('/goals/stats');
    return response.data;
};
