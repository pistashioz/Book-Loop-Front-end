import axios from 'axios';
export const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/users`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; 
  }
};