import styled from 'styled-components';
import RoomsOption from './RoomsOption';
import {  useEffect, useState } from 'react';
import RegisterBooking from './RegisterBooking.js';
import useBooking from '../../hooks/api/useBooking';

export default function RoomsSelection({ hotelSelected }) {
  const [roomSelected, setRoomSelected] = useState();
  const [booking, setBooking] = useState();
  const { getBooking } = useBooking();

  useEffect(async() => setBooking(await getBooking()), []);

  return (
    <Container>
      <SubTitle>Ótima pedida! Agora escolha seu quarto</SubTitle>
      <Rooms>
        {hotelSelected.Rooms.map((room) => (
          <RoomsOption key={room.id} room={room} index={room.id} roomSelected={roomSelected} setRoomSelected={setRoomSelected} booking={booking}/>
        ))}
      </Rooms>
      <RegisterBooking roomSelected={roomSelected} booking={booking}/>
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
