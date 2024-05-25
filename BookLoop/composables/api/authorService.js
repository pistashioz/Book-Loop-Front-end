const config = useRuntimeConfig()

export async function fetchAuthors(authorId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/authors/${authorId}`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
