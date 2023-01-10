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

export async function getActivities(token) {
  try {
    const response = await api.get('/activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}

export async function postSubscriptionActivity(token, body) {
  try {
    const response = await api.post('/activities', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}
