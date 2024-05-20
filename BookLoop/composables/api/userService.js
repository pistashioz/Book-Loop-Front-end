import axios from 'axios';
const baseURL = 'http://127.0.0.1:3360'; 
export const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${baseURL}/users`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; 
  }
};