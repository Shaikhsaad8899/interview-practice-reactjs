const axios = require('axios');

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

// ✅ Intercept Requests
api.interceptors.request.use(
    (config) => {
        // Add Authorization token or modify headers
        // const token = localStorage.getItem('authToken');
        // if (token) config.headers.Authorization = `Bearer ${token}`;

        console.log('Request Intercepted 1:');
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Intercept Responses
api.interceptors.response.use(
    (response) => {
        // console.log('Response Intercepted:', response);
        console.log('Response Intercepted 2:');
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            console.error('Unauthorized - Redirecting to login');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// ✅ Usage Example
api.get('/products')
    .then((res) => console.log('Products:', res.data))
    .catch((err) => console.error('API Error:', err));