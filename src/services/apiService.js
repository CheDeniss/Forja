import axios from 'axios';

// Базовий URL бекенду (змінюйте в залежності від середовища)
const API_BASE_URL = 'http://forja';
//const API_BASE_URL = 'https://localhost:7211';
// Налаштування Axios
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Додаємо інтерцептор для додавання JWT-токена (якщо є аутентифікація)
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Зберігаємо токен у localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Обробка помилок глобально
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
