const { $api } = useNuxtApp();

export async function toggleSuspension(userId) {
    const { data, error } = await $api.post(`/admin/suspend/${userId}`, {
      method: 'POST', // Likely POST for both suspend and unsuspend
      /*
      headers: {
        'Authorization': `Bearer ${getToken()}`, // Replace with your token retrieval logic
      },
    body: {
        suspensionDate:
      }
      */

    });
  
    if (error) {
      console.error('Error toggling user suspension:', error);
      return context.res.status(error.response.status).json(error.response.data);
    }
  
    console.log(data.message); 
    
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
  