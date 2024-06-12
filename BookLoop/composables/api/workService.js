// composables/api/workService.js
const { $api } = useNuxtApp();

export async function fetchWorks(currentPage, arrGenres, arrAuthors, language, minRating, maxRating) {
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
    throw error;
  }
}


export async function fetchWorkById(workId) {
  try {
    const response = await $api.get(`/works/${workId}`);
    console.log('response works id', response)
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

export async function removeWork(workId){
  try{
    const response = await $api.delete(`/works/${workId}`)
    return response
  }
  catch(error){
    throw error;
  }
}


export async function addWork(workData) {
  try {
    const response = await $api.post('/works', workData, {});
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

export async function getReviewsComments(workId, literaryReviewId) {
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getReview(workId, literaryReviewId){
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function likeReview(workId, literaryReviewId){
    try {
      const response = await fetch(`/works/${workId}/reviews/${literaryReviewId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': `Bearer ${yourAuthToken}`,
        },
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to like review');
      }
      
      // Handle success, update UI or show message
      console.log('Review liked:', data);
    } catch (error) {
      console.error('Error liking review:', error);
      // Handle error, show error message to user
    }
  }

  export async function findGenres(){
    try{
      const response = await $api.get('/genres?simple=true&page=1&limit=10');
      return response.data;
    } catch (error){
      throw error; 
    }
  }

  export async function fetchFilteredGenres(){
    try{
      const response = await $api.get('/genres')
      return response.data
    } catch (error){
      throw error; 
    }
  }

