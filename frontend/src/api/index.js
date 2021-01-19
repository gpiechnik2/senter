import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const signUp = (formData) => API.post('/auth/users/', formData);
export const signIn = (formData) => API.post('/auth/token/login/', formData);
export const signGoogle = (token) =>
  API.post('/auth/google/token/login/', token);
