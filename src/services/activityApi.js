import api from './api';

export async function getActivitiesByDateId(dateId, token) {
  try {
    const response = await api.get(`/activities/${dateId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}
