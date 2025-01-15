import axios from 'axios';

// Configurez l'URL de votre backend
const api = axios.create({
    baseURL: 'http://localhost:5001', // Remplacez par l'URL de votre backend
});

export default api;
