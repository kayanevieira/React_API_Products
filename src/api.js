import axios from 'axios';

const api = axios.create({
    baseURL: 'https://exercicio.herokuapp.com/'
});

export default api;