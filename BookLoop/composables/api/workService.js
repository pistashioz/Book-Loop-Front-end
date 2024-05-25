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
    const response = await fetch(`${config.public.apiBaseUrl}/works/${workId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}