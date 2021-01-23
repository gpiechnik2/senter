import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Token ${
      JSON.parse(localStorage.getItem('profile')).auth_token
    }`;
  }

  return req;
});

export const signUp = (formData) => API.post('/auth/users/', formData);
export const signIn = (formData) => API.post('/auth/token/login/', formData);
export const signGoogle = (tokenGoogle) =>
  API.post('/auth/google/token/login/', tokenGoogle);

export const createKeyword = (formData) =>
  API.post('/keyword-planner/', formData);
export const contentCheck = (formData) =>
  API.post('/content-analysis/check/', formData);
