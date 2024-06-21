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
    console.error('Error retrieving works:', error);
  }
}


export async function fetchWorkById(workId) {
  try {
    const response = await $api.get(`/works/${workId}`);
    console.log('response works id', response)
    return response.data;
  } catch (error) {
    console.error('Error retrieving work:', error);
  }
}

export async function fetchEditionsByWorkId(workId) {
  try {
    const response = await $api.get(`/works/${workId}/editions`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving editions:', error);
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
    console.error('Error retrieving literary reviews:', error);
  }
}

export async function fetchLiteraryReviewsPagination(workId, currentPage) {
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
  try {
    const response = await $api.get(`/genres/${workId}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving book genres:', error);
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
    console.error('Error posting literaryReview:', error);
  }
}

export async function removeWork(workId){
  try{
    const response = await $api.delete(`/works/${workId}`)
    return response
  }
  catch(error){
    console.error('Error removing work:', error);
  }
}


export async function addWork(workData) {
  try {
    const response = await $api.post('/works', workData, {});
    return response.data;
  } catch (error) {
    console.error('Error uploading work:', error);
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
    console.error('Error adding edition:', error);
  }
}

export async function getReviewsComments(workId, literaryReviewId) {
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving comments:', error);
  }
}

export async function addComment(workId, literaryReviewId, commentData){
  try{
    const response = await $api.post(`/works/${workId}/reviews/${literaryReviewId}/comments`, commentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    }) 
    console.log(response)
    return response.data
  }catch (error) {
    console.error('Error uploading comment:', error);
  }
}

export async function getReview(workId, literaryReviewId){
  try {
    const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting reviews:', error);
  }
}

export async function likeReview(workId, literaryReviewId, reviewInfo){
    try {
      const response = await $api.post(`/works/${workId}/reviews/${literaryReviewId}/likes`, reviewInfo, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      return response
    } catch (error) {
      console.error('Error liking review:', error);
    }
  }

  export async function addReview(workId){
    try {
      const response = await $api.post(`/works/${workId}/reviews`, reviewData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }
  export async function removeReview(workId, literaryReviewId){
    try{
      const response = await $api.delete(`/works/${workId}/reviews/${literaryReviewId}`)
      return response
    }
    catch(error){
      console.error('Error removing review:', error);
    }
  }

  export async function getComments(workId, literaryReviewId){
    try{
      const response = await $api.get(`/works/${workId}/reviews/${literaryReviewId}/comments`)
      return response.data
    }catch (error) {
      console.error('Error retrieving comments:', error);
    }
  }
  export async function findGenres(){
    try{
      const response = await $api.get('/genres?simple=true&page=1&limit=10');
      return response.data;
    } catch (error){
      console.error('Error retrieving genres:', error);
    }
  }

  export async function fetchFilteredGenres(){
    try{
      const response = await $api.get('/genres')
      return response.data
    } catch (error){
      console.error('Error retrieving filtered genres:', error);
    }
  }

