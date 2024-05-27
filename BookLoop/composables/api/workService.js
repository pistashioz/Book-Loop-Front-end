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
    const response = await useFetch(`${config.public.apiBaseUrl}/works/${workId}/reviews`, {
      headers: {
        "Content-Type": "application/json"
      },
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
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body:JSON.stringify(workData)
    })
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addEdition(workId, editionData) {
  try {
    const response = await useFetch(
      `${config.public.apiBaseUrl}/works/${workId}/editions`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(editionData),
      }
    );
    console.log('response: ', response)
    console.log('response data; ', response.data)
    console.log('booook', response.data._rawValue)
    console.log('booook', response.data._rawValue.book)
    return response.data
  } catch (error) {
    throw error;
  }
}

//axios

/*

import axios from 'axios';

const config = useRuntimeConfig();

// Fetch all works
export async function fetchWorks() {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/works`);
    return response.data;
  } catch (error) {
    throw createAxiosError(error); // Convert Axios error to useFetch format
  }
}

// Fetch a work by its ID
export async function fetchWorkById(workId) {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/works/${workId}`);
    return response.data;
  } catch (error) {
    throw createAxiosError(error);
  }
}

// Fetch all editions for a specific work by its ID
export async function fetchEditionsByWorkId(workId) {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/works/${workId}/editions`);
    return response.data;
  } catch (error) {
    throw createAxiosError(error);
  }
}

// Fetch the author of a work by its ID (Adjust route if needed)
export async function fetchAuthorByWorkId(workId) {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/works/${workId}/author`); // Assuming this route returns the author
    return response.data;
  } catch (error) {
    throw createAxiosError(error);
  }
}

// Fetch literary reviews for a work by its ID
export async function fetchLiteraryReviews(workId) {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/works/${workId}/reviews`);
    return response.data;
  } catch (error) {
    throw createAxiosError(error);
  }
}

// Fetch book genres for a work by its ID
export async function fetchBookGenres(workId) {
  try {
    const response = await axios.get(`${config.public.apiBaseUrl}/book-genres/${workId}`);
    return response.data;
  } catch (error) {
    throw createAxiosError(error);
  }
}

// Add a new literary review for a work
export async function addLiteraryReview(workId, reviewData) {
  try {
    const response = await axios.post(
      `${config.public.apiBaseUrl}/works/${workId}/reviews`,
      reviewData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data; 
  } catch (error) {
    throw createAxiosError(error); 
  }
}

// Add a new work
export async function addWork(workData) {
  try {
    const response = await axios.post(
      `${config.public.apiBaseUrl}/works`,
      workData,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw createAxiosError(error); 
  }
}

// Add a new edition for a work
export async function addEdition(workId, editionData) {
  try {
    const response = await axios.post(
      `${config.public.apiBaseUrl}/works/${workId}/editions`,
      editionData, 
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    throw createAxiosError(error); 
  }
}

// Helper function to convert Axios errors to a format compatible with useFetch
function createAxiosError(error) {
  return {
    value: {
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || "Error",
      message: error.message || "An error occurred"
    }
  };
}


*/