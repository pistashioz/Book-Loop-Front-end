import axios from 'axios';

const baseURL = 'http://127.0.0.1:3360'; 

export async function fetchWorks() {
  try {
    const response = await axios.get(`${baseURL}/works`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchWorkById(workId) {
  try {
    const response = await axios.get(`${baseURL}/works/${workId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function fetchEditionsByWorkId(workId) {
  try {
    const response = await axios.get(`${baseURL}/works/${workId}/editions`);
    return response.data; 
  } catch (error) {
    throw error;
  }
}

export async function fetchAuthorByWorkId(workId) {
  try {
    const response = await axios.get(`${baseURL}/authors/${workId}`);
    return response.data; 
  } catch (error) {
    throw error;
  }
}