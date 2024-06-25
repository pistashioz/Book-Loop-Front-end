import { useNuxtApp } from '#app';

export async function fetchWorks(currentPage, arrGenres, arrAuthors, language, minRating, maxRating) {
  const { $api } = useNuxtApp();
  const genres = arrGenres.length > 0 ? arrGenres.join(', ') : null;
  const authors = arrAuthors.length > 0 ? arrAuthors.join(', ') : null;
  console.log(genres, authors)
  try {
    const response = await $api.get('/works', {
      params: {
        page: currentPage,
        genres,
        authors,
        language,
        minRating,
        maxRating
      }
    });
    console.log('response works', response);
    return response.data;
  } catch (error) {
    console.error('Error retrieving works:', error);
  }
}

export async function fetchWorksNoParams() {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get('/works', {});
    console.log('response works', response);
    return response.data;
  } catch (error) {
    console.error('Error retrieving works:', error);
  }
}

export async function fetchWorkById(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}`);
    console.log('response works id', response);
    return response.data;
  } catch (error) {
    console.error('Error retrieving work:', error);
  }
}

export async function fetchEditionsByWorkId(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}/editions`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving editions:', error);
  }
}

export async function fetchLiteraryReviews(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving literary reviews:', error);
  }
}

export async function fetchLiteraryReviewsPagination(workId, currentPage) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}/reviews`, {
      params: {
        page: currentPage,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error retrieving literary reviews:', error);
  }
}

export async function fetchBookGenres(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/genres/${workId}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving book genres:', error);
  }
}

export async function addLiteraryReview(workId, reviewData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post(`/works/${workId}/reviews`, reviewData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error posting literary review:', error);
  }
}

export async function removeWork(workId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.delete(`/works/${workId}`);
    return response;
  } catch (error) {
    console.error('Error removing work:', error);
  }
}

export async function addWork(workData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post('/works', workData, {});
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addEdition(workId, editionData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post(`/works/${workId}/editions`, editionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding edition:', error);
  }
}

export async function getReviewsComments(workId, literaryReviewId, page = 1, limit = 10) {
  const { $api } = useNuxtApp();
  console.log(workId, literaryReviewId);
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}/comments`, {
      params: { page, limit }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addComment(workId, literaryReviewId, commentData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post(`/works/${workId}/reviews/${literaryReviewId}/comments`, commentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error uploading comment:', error);
  }
}

export async function getReview(workId, literaryReviewId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting reviews:', error);
  }
}

export async function likeReview(workId, literaryReviewId) {
  const { $api } = useNuxtApp();
  console.log(workId, literaryReviewId);
  try {
    const response = await $api.post(`/works/${workId}/reviews/${literaryReviewId}/likes`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function unlikeReview(workId, literaryReviewId) {
  const { $api } = useNuxtApp();
  console.log(workId, literaryReviewId);
  try {
    const response = await $api.delete(`/works/${workId}/reviews/${literaryReviewId}/likes`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateReview(workId, literaryReviewId, reviewData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.patch(`/works/${workId}/reviews/${literaryReviewId}`, reviewData);
    console.log('response:', response);
    console.log('response data:', response.data);
    return response.data;
  } catch (err) {
    err.value = err.response?.data?.message || 'Error updating review';
  }
}

export async function removeReview(workId, literaryReviewId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.delete(`/works/${workId}/reviews/${literaryReviewId}`);
    return response;
  } catch (error) {
    console.error('Error removing review:', error);
  }
}

export async function getComments(workId, literaryReviewId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving comments:', error);
  }
}

export async function removeComment(workId, literaryReviewId, commentId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.delete(`/works/${workId}/reviews/${literaryReviewId}/comments/${commentId}`);
    return response;
  } catch (error) {
    console.error('Error removing comment:', error);
  }
}

export async function updateComment(workId, literaryReviewId, commentId, commentData) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.patch(`/works/${workId}/reviews/${literaryReviewId}/comments/${commentId}`, commentData);
    console.log('response:', response);
    console.log('response data:', response.data);
    return response.data;
  } catch (err) {
    err.value = err.response?.data?.message || 'Error updating review';
  }
}

export async function likeComment(workId, literaryReviewId, commentId, userId) {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post(`/works/${workId}/reviews/${literaryReviewId}/comments/${commentId}/likes`, {
      userId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error liking review:', error);
  }
}

export async function removeLikeComment(workId, literaryReviewId, commentId, userId) {
  const { $api } = useNuxtApp();
  console.log(workId, commentId, literaryReviewId, userId);
  try {
    const response = await $api.delete(`/works/${workId}/reviews/${literaryReviewId}/comments/${commentId}/likes`, {
      userId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error removing like from comment:', error);
    throw error;
  }
}

export async function findGenres() {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get('/genres?simple=true&page=1&limit=10');
    return response.data;
  } catch (error) {
    console.error('Error retrieving genres:', error);
  }
}

export async function fetchFilteredGenres() {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get('/genres');
    return response.data;
  } catch (error) {
    console.error('Error retrieving filtered genres:', error);
  }
}
