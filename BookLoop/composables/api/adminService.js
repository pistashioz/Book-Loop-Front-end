const { $api } = useNuxtApp();
const error = ref(null)
export async function toggleSuspension(userId, suspension) {
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
    try {
      const response = await $api.get(`/users/scheduled-to-delete`);
      console.log('response for get users for deletion: ', response)
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export async function getSuspendedUsers(){
    try {
      const response = await $api.get(`/users/suspended-users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  // person functions

export const getPersons = async (role, currentPage) => {
  try {
    console.log('get person role: ', role)
    console.log('get current page: ', currentPage)
      const response = await $api.get(`/persons`, {
        params: {
          role: role,
          page: currentPage
        }
      });
      console.log('respose get persons: ', response)
      return response.data;
  } catch (error) {
      console.error('Error fetching persons:', error);
      throw error;
  }
};

export const removePerson = async (personId) => {
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
  try {
    const response = await $api.patch(`/persons/${personId}`, { personName });
    return response;
  } catch (error) {
    console.error('Error updating person info:', error);
    return { status: 500, json: { message: 'Error updating person info' } };
  }
};

export const createPerson = async (roles,personName) => {
  try {
    console.log(personName, roles)
    const response = await $api.post(`/persons`, {personName, roles}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getRoles = async () => {
  try {
    const response = await $api.get(`/persons/roles`);
    return response;
  } catch (error) {
    console.error('Error fetching existing roles:', error);
    return { status: 500, json: { message: 'Error fetching existing roles' } };
  }
}

// publisher functions

export const getPublishers = async(currentPage, limit = 10) => {
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
  try {
    console.log(publisherName)
    const response = await $api.post(`/publishers`, {publisherName}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const removePublisher = async(publisherId) =>  {
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
  try {
    const response = await $api.put(`/publishers/${publisherId}`, { publisherName });
    return response;
  } catch (error) {
    console.error('Error updating publisher info:', error);
    return { status: 500, json: { message: 'Error updating publisher info' } };
  }
};
