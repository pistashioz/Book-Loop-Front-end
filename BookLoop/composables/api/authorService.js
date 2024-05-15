import axios from 'axios';

const baseURL = 'http://127.0.0.1:3360'; 

export async function fetchAuthors(authorId) {
  try {
    const response = await axios.get(`${baseURL}/authors/${authorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
