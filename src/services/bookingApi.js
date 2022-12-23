import api from './api';

export async function postBooking(token, body) {
  const response = await api.post('/booking/', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
