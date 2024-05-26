const config = useRuntimeConfig()


export async function fetchWorks() {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/works`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function fetchWorkById(workId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/works/${workId}`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function fetchEditionsByWorkId(workId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/works/${workId}/editions`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function fetchAuthorByWorkId(workId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/authors/${workId}`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function fetchLiteraryReviews(workId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/works/${workId}/reviews`);
    console.log('reviews:', data)
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function fetchBookGenres(workId) {
  try {
    const { data, error } = await useFetch(`${config.public.apiBaseUrl}/book-genres/${workId}`);
    if (error.value) {
      throw error.value;
    }
    return data.value;
  } catch (error) {
    throw error;
  }
}
export async function addLiteraryReview(workId, reviewData) {
  try {
    console.log(JSON.stringify(reviewData))
    const response = await useFetch(`${config.public.apiBaseUrl}/works/${workId}/reviews`, {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
}
export async function addWork(workData){
  try{
    const response = await useFetch(`${config.public.apiBaseUrl}/works`, {
      method: 'POST',
      body:JSON.stringify(workData)
    })
    return response.data;
  } catch (error) {
    throw error;
  }
}