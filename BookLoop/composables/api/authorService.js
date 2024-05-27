const config = useRuntimeConfig()

export async function fetchAuthors(authorId) {
  try {
    const  response = await axios.get(`${config.public.apiBaseUrl}/authors/${authorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
