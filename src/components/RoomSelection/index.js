import styled from 'styled-components';
import RoomsOption from './RoomsOption';
import { useState } from 'react';
import RegisterBooking from './RegisterBooking.js';

export default function RoomsSelection({ hotelSelected }) {
  const [roomSelected, setRoomSelected] = useState(0);

  return (
    <Container>
      <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
      <Rooms>
        {hotelSelected.Rooms.map((room) => (
          <RoomsOption room={room} index={room.id} roomSelected={roomSelected} setRoomSelected={setRoomSelected} />
        ))}
      </Rooms>
      <RegisterBooking roomSelected={roomSelected} />
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
