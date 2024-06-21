const { $api } = useNuxtApp();


export async function findAll(currentPage) {
  try {
    const response = await $api.get('/users', {
      params: {
        page: currentPage,
      },
    });
    console.log('response users', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return { status: 500, json: { message: 'Error fetching users' } };
  }
}
