const { $api } = useNuxtApp();
const error = ref(null)
export async function toggleSuspension(userId, suspension) {
  const { $api } = useNuxtApp();
  error.value = null
  try{
    console.log(userId, suspension)
    const response = await $api.patch(`/users/${userId}`, suspension, 
    {});
    return response
  }
  catch(err){
    error.value = err.response?.data?.message || 'Error suspending/unsuspending user';
  }
    
  }


  export async function deleteUser(userId) {
    const { $api } = useNuxtApp();
    try {
      const { data, error } = await $api.delete(`/users/${userId}`); 
      if (error) {
        console.error('Error deleting user:', error);
        return context.res.status(error.response.status).json(error.response.data);
      }
  
      console.log(data.message); 
      // inform user ?
    } catch (error) {
      console.error('Error deleting user:', error);
      return context.res.status(500).json({ message: 'Error deleting user' });
    }
  }
  
  export async function getUsersForDeletion(){
    const { $api } = useNuxtApp();
    try {
      const response = await $api.get(`/users/scheduled-to-delete`);
      console.log('response for get users for deletion: ', response)
      return response.data;
    } catch (error) {
      console.error('Error getting users for deletion:', error);
      return context.res.status(500).json({ message: 'Error getting users for deletion' });
    }
  }
  export async function getSuspendedUsers(){
    const { $api } = useNuxtApp();
    try {
      const response = await $api.get(`/users/suspended-users`);
      return response.data;
    } catch (error) {
      console.error('Error suspending user:', error);
      return context.res.status(500).json({ message: 'Error suspending user' });
    }
  }


  // person functions

export const getPersons = async (role, currentPage, limit) => {
  const { $api } = useNuxtApp();
  try {
    console.log('get person role: ', role)
    console.log('get current page: ', currentPage)
      const response = await $api.get(`/persons`, {
        params: {
          role: role,
          page: currentPage,
          limit: limit
        }
      });
      console.log('respose get persons: ', response)
      return response.data;
  } catch (error) {
      console.error('Error fetching persons:', error);
      throw error;
  }
};

export const getAuthors = async () => {
  const { $api } = useNuxtApp();
  try {
      const response = await $api.get(`/persons`, {
        params: {
          role: 'author',
        }
      });
      console.log('respose get authors: ', response)
      return response.data;
  } catch (error) {
      throw error;
  }
}


export const removePerson = async (personId) => {
  const { $api } = useNuxtApp();
  try {
    const { data, error} = await $api.delete(`/persons/${personId}`)
    if (error) {
      console.error('Error deleting person:', error);
      return context.res.status(error.response.status).json(error.response.data);
    }
    console.log(data.message); 
  } catch (error) {
    console.error('Error deleting person:', error);
    return context.res.status(500).json({ message: 'Error deleting person' });
  }
}

export const updatePerson = async (personId, personName) => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.patch(`/persons/${personId}`, { personName });
    return response;
  } catch (error) {
    console.error('Error updating person info:', error);
    return { status: 500, json: { message: 'Error updating person info' } };
  }
};

export const createPerson = async (roles,personName) => {
  const { $api } = useNuxtApp();
  try {
    console.log(personName, roles)
    const response = await $api.post(`/persons`, {personName, roles}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating person:', error);
    return { status: 500, json: { message: 'Error creating person' } };
  }
}

export const getRoles = async () => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.get(`/persons/roles`);
    return response;
  } catch (error) {
    console.error('Error fetching existing roles:', error);
    return { status: 500, json: { message: 'Error fetching existing roles' } };
  }
}

export const removeRole = async (personId, role) => {
  const { $api } = useNuxtApp();
  try {
    console.log(personId, role);
    const { data } = await $api.delete(`/persons/${personId}/roles`, {
      data: { role }
    });
    console.log(data.message);
    return data.message;
  } catch (error) {
    console.error('Error deleting role:', error);
    throw error;
  }
};


export const addRole = async (personId, role) => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.post(`/persons/${personId}/roles`, {role}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  return response.data;
  } catch (error) {
    console.error('Error adding role:', error);
    return { status: 500, json: { message: 'Error adding role' } };
  }
}

export const getSeries = async(currentPage, limit = 10) => {
  const { $api } = useNuxtApp();
  try{
    const response = await $api.get(`/book-in-series`, {
      params: {
        page: currentPage,
        limit
      }
    })
    console.log('response get series:', response)
    return response
  }
 catch(error){
  console.error('Error fetching series:', error)
  throw error
 }
}

// publisher functions

export const getPublishers = async(currentPage, limit = 10) => {
  const { $api } = useNuxtApp();
  try {
    console.log('get current page: ', currentPage)
      const response = await $api.get(`/publishers`, {
        params: {
          page: currentPage,
          limit
        }
      });
      console.log('respose get publishers: ', response)
      return response.data;
  } catch (error) {
      console.error('Error fetching publishers:', error);
      throw error;
  }
}

export const createPublisher = async(publisherName) => {
  const { $api } = useNuxtApp();
  try {
    console.log(publisherName)
    const response = await $api.post(`/publishers`, {publisherName}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating publisher:', error);
    return { status: 500, json: { message: 'Error creating publisher' } };
  }
}

export const removePublisher = async(publisherId) =>  {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.delete(`/publishers/${publisherId}`)
    console.log(response)
    return response;
  } catch (error) {
    console.error('Error deleting publisher:', error);
    return { status: 500, json: { message: 'Error deleting publisher' } };
  }
}

export const updatePublisher = async (publisherId, publisherName) => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.put(`/publishers/${publisherId}`, { publisherName });
    return response;
  } catch (error) {
    console.error('Error updating publisher info:', error);
    return { status: 500, json: { message: 'Error updating publisher info' } };
  }
};

export const getGenres = async(currentPage, limit = 10, simple = true) =>{
  const { $api } = useNuxtApp();
  try{
    const response = await $api.get(`/genres`, {
      params: {
        filterPage: currentPage,
        limit,
        simple
      }
    });
    console.log('respose get genres: ', response)
    return response.data;
} catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
}
}

export const updateGenre = async(genreId, genreName) => {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.patch(`/genres/${genreId}`, { genreName });
    return response;
  } catch (error) {
    console.error('Error updating genre:', error);
    return { status: 500, json: { message: 'Error updating genre' } };
  }
}

export const createGenre = async(genreName) => {
  const { $api } = useNuxtApp();
  try {
    console.log(genreName)
    const response = await $api.post(`/genres`, {genreName}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating genre:', error);
    return { status: 500, json: { message: 'Error creating genre' } };
  }
}

export const removeGenre = async(genreId) =>  {
  const { $api } = useNuxtApp();
  try {
    const response = await $api.delete(`/genres/${genreId}`)
    console.log(response)
    return response;
  } catch (error) {
    console.error('Error deleting genre:', error);
    return { status: 500, json: { message: 'Error deleting genre' } };
  }
}
