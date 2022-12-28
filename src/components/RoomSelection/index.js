import styled from 'styled-components';
import RoomsOption from './RoomsOption';
import { useMemo, useState } from 'react';
import RegisterBooking from './RegisterBooking.js';

function normalizeRooms(rooms, hasBooking) {
  const normalizedRooms = rooms.map((room) => {
    const options = [];
    const { capacity, _count, id: roomId } = room;

    if (hasBooking.roomId === room.id) {
      _count.Booking--;
    }

    for (let i = 0; i < capacity; i++) {
      const option = { id: roomId * 100 + i };
      const isReserved = i >= capacity - _count.Booking;
      options.push({ ...option, isReserved });
    }

    return { ...room, _count, options };
  });
  return normalizedRooms;
}

export default function RoomsSelection({ hotelSelected }) {
  const { hasBooking } = hotelSelected;
  const [roomSelected, setRoomSelected] = useState(hasBooking ? { roomId: hasBooking.roomId, optionId: hasBooking.roomId * 100 } : { roomId: null, optionId: null });
  const rooms = useMemo(() => normalizeRooms(hotelSelected.Rooms, hasBooking), [hotelSelected]);
  return (
    <Container>
      <SubTitle>{hasBooking ? 'Escolha para qual quarto deseja trocar' : 'Ótima pedida! Agora escolha seu quarto'}</SubTitle>
      <Rooms>
        {rooms.map((room) => (
          <RoomsOption key={room.id} room={room} setRoomSelected={setRoomSelected} roomSelected={roomSelected} hasBooking={hasBooking} />
        ))}

      </Rooms>
      {roomSelected.roomId && roomSelected.roomId !== hasBooking.roomId && <RegisterBooking roomSelected={roomSelected.roomId} hasBooking={hasBooking} />}
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  margin: 30px 0;
`;

const SubTitle = styled.h5`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const Rooms = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
