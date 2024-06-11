import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getArticles = async () => {
  const response = await axios.get(`${API_URL}/articles`);
  return response.data;
};

export const getArticleById = async (id) => {
  const response = await axios.get(`${API_URL}/articles/${id}`);
  return response.data;
};

export const postComment = async (articleId, content) => {
  const response = await axios.post(`${API_URL}/articles/${articleId}/comments`, { content });
  return response.data;
};

export const getComments = async (articleId) => {
  const response = await axios.get(`${API_URL}/articles/${articleId}/comments`);
  return response.data;
};

export const createArticle = async (article) => {
  const response = await axios.post(`${API_URL}/articles`, article);
  return response.data;
};
