import apiClient from './apiService';

// Здоров'я сервера
export const healthCheck = async () => {
    return await apiClient.get('/auth/health');
};

// Реєстрація користувача
export const registerUser = async (userData) => {
    return await apiClient.post('/auth/register', userData);
};

// Логін користувача
export const loginUser = async (credentials) => {
    return await apiClient.post('/auth/login', credentials);
};

// Отримання даних профілю
export const getProfile = async () => {
    return await apiClient.get('/profile');
};

// Оновлення профілю
export const updateProfile = async (profileData) => {
    return await apiClient.put('/profile', profileData);
};
