// composables/api/workService.js
const { $api } = useNuxtApp();

export async function fetchWorks() {

  try {
    const response = await $api.get('/works');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchWorkById(workId) {

  try {
    const response = await $api.get(`/works/${workId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEditionsByWorkId(workId) {

  try {
    const response = await $api.get(`/works/${workId}/editions`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

/* export async function fetchAuthorByWorkId(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/authors/${workId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
} */

export async function fetchLiteraryReviews(workId) {

  try {
    const response = await $api.get(`/works/${workId}/reviews`);
    console.log('reviews:', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchBookGenres(workId) {

  try {
    const response = await $api.get(`/genres/${workId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addLiteraryReview(workId, reviewData) {

  try {
    const response = await $api.post(`/works/${workId}/reviews`, reviewData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addWork(workData) {

  try {
    const response = await $api.post('/works', workData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addEdition(workId, editionData) {

  try {
    const response = await $api.post(`/works/${workId}/editions`, editionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
