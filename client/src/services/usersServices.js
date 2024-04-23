import axios from "axios";

const URLAPI_USERS = 'http://localhost:3000/api/users/';

export const login = async (userData) => {
    try {
        const response = await axios.post(`${URLAPI_USERS}login`, userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const register = async (userData) => {
    try {
        const response = await axios.post(`${URLAPI_USERS}register`, userData);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Error registering:', error);
        throw error;
    }
};
