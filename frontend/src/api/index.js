import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const signUp = (formData) => API.post('/auth/users/', formData);
export const signIn = (formData) => API.post('/auth/token/login/', formData);
