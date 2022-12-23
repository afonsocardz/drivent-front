import styled from 'styled-components';
import RoomsOption from './RoomsOption';
import { useState } from 'react';
import RegisterBooking from './RegisterBooking.js';

export default function RoomsSelection({ hotelSelected }) {
  const { hasBooking, Rooms: rooms } = hotelSelected;
  const [roomSelected, setRoomSelected] = useState(() => hasBooking ? hasBooking.roomId : false);

  return (
    <Container>
      <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
      <Rooms>
        {rooms.map((room) => (
          <RoomsOption key={room.id} room={room} roomSelected={roomSelected} setRoomSelected={setRoomSelected} />
        ))}
      </Rooms>
      {roomSelected && <RegisterBooking roomSelected={roomSelected} />}
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
