import axios from "axios";
import { API_URL } from "../../config";

const URLAPI_USERS = `${API_URL}/auth/`

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
