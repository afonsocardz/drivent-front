import api from './api';

export async function getHotelsInfo(token) {
  try {
    const response = await api.get('/hotels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response;
  }
}
