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
export const changeContactEmail = (formData) =>
  API.post('/auth/users/change-contact-email/', formData);
export const changeUserEmail = (emailData) =>
  API.post('/auth/users/change-email/', emailData);
export const changeUserAgent = (formData) =>
  API.post('/auth/users/change-user-agent/', formData);
export const changeUserPassword = (passwordData) =>
  API.post('/auth/users/set-password/', passwordData);

export const createKeyword = (formData) =>
  API.post('/keyword-planner/', formData);
export const contentCheck = (formData) =>
  API.post('/content-analysis/check/', formData);
export const contentAnalyse = (formData) =>
  API.post('/content-analysis/analyse/', formData);
export const getWebsiteInfo = (formData) =>
  API.post('/website-info/', formData);
export const getAudit = (formData) => API.post('/audit/check/', formData);
export const createAudit = (saveData) => API.post('/audit/', saveData);
export const getWebsiteAnalysis = (formData) =>
  API.post('/website-analysis/seo/', formData);
export const getKeywordAnalysis = (formData) =>
  API.post('/keyword-analysis/', formData);

export const getNews = () => API.get('/updates/');

export const getArticles = () => API.get('/content-analysis/analyse/');
export const deleteArticle = (id) =>
  API.delete(`/content-analysis/analyse/${id}/`);
export const editArticle = (id, formData) =>
  API.put(`/content-analysis/analyse/${id}/`, formData);

export const getKeywords = () => API.get('/keyword-planner/');
export const deleteKeyword = (id) => API.delete(`/keyword-planner/${id}/`);

export const getAudits = () => API.get('/audit/');
export const deleteAudit = (id) => API.delete(`/audit/${id}/`);

export const searchQuery = (formData) => API.post('/search/', formData);
