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