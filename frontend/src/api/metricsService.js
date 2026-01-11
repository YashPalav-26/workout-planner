import apiClient from './axiosConfig.js';

// Get Today's Metrics
export const getTodayMetrics = async () => {
    const response = await apiClient.get('/metrics/today');
    return response.data;
};

// Get Weekly Metrics
export const getWeeklyMetrics = async () => {
    const response = await apiClient.get('/metrics/weekly');
    return response.data;
};

// Get Monthly Metrics
export const getMonthlyMetrics = async (month, year) => {
    const response = await apiClient.get('/metrics/monthly', {
        params: { month, year },
    });
    return response.data;
};

// Get Dashboard Stats
export const getDashboardStats = async () => {
    const response = await apiClient.get('/metrics/dashboard');
    return response.data;
};

// Update Weight
export const updateWeight = async (weight, date) => {
    const response = await apiClient.put('/metrics/weight', {
        weight,
        date,
    });
    return response.data;
};
