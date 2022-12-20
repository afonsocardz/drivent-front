import api from './api';

export async function getRooms(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}/rooms`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
