import axios from "axios";
import { API_URL } from "../../config";

const URLAPI_NEWS = `${API_URL}/news/`;

const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }

export const getAllNews = async () => {
  try {
    const response = await axios.get(URLAPI_NEWS, { headers });
    return response.data.sort((a, b) => (a.date < b.date) ? 1 : -1);
  } catch (error) {
    console.error('Error reading news:', error);
    throw error;
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${URLAPI_NEWS + id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error reading news`, error);
    throw error;
  }
};

export const createNews = async (newsData) => {
  try {
    const response = await axios.post(`${URLAPI_NEWS}`, newsData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error creating news:', error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${URLAPI_NEWS}${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}

export const updateNews = async (id, newsData) => {
  try {
    const response = await axios.put(`${URLAPI_NEWS}${id}`, newsData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error updating news:', error);
    throw error;
  }
};