import axios from "axios";

const URLAPI_NEWS = 'http://localhost:3000/api/news/'; //json-server URL

const token = localStorage.getItem('token');
const headers = { 'Authorization': `Bearer ${token}` }

export const getAllNews = async () => {
  try {
    const response = await axios.get(URLAPI_NEWS, { headers });
    return response.data;
  } catch (error) {
    console.error('Error reading news:', error);
    throw error;
  }
};

export const getOneNews = async (id) => {
  try {
    const response = await axios.get(`${URLAPI_NEWS + id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error reading news with id ${id}:`, error);
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