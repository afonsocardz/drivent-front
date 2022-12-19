import { useState } from 'react';
import styled from 'styled-components';

const SINGLE = 1;
const DOUBLE = 2;
const TRIPLE = 3;

export default function HotelOption({ hotel }) {
  const [isSelect, setIsSelect] = useState(false);

  function checkRoomTypes(rooms) {
    const hash = {};
    for (let i = 0; i < rooms.length; i++) {
      if (!hash[rooms[i].capacity]) {
        if (rooms[i].capacity === SINGLE) {
          hash['single'] = 'Single';
        }
        if (rooms[i].capacity === DOUBLE) {
          hash['double'] = 'Double';
        }
        if (rooms[i].capacity >= TRIPLE) {
          hash['triple'] = 'Triple';
        }
      }
    }
    return Object.values(hash);
  }

  function vacancyQty(hotel) {
    return hotel.Rooms.reduce(
      (prev, room) => (prev.capacity - prev._count.Booking) + (room.capacity - room._count.Booking));
  }

  function clickHandler() {
    setIsSelect(!isSelect);
  }

  return (
    <>
      <HotelContainer isSelect={isSelect} onClick={clickHandler}>
        <ImageContainer>
          <Image src={hotel.image} alt='Fachada do hotel' />
        </ImageContainer>
        <HotelName>{hotel.name}</HotelName>
        <HotelTitle>{'Tipo de Acomodação:'}</HotelTitle>
        <HotelInfo>{hotel.Rooms && checkRoomTypes(hotel.Rooms).join(', ')}</HotelInfo>
        <HotelTitle>{'Vagas disponíveis:'}</HotelTitle>
        <HotelInfo>{vacancyQty(hotel)}</HotelInfo>
      </HotelContainer>
    </>
  );
}

const HotelInfo = styled.h5`
  font-size: 12px;
  margin-bottom: 14px;
`;

const HotelTitle = styled.h5`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 3px;
`;

const HotelName = styled.h4`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
`;

const HotelContainer = styled.div`
  width: 196px;
  height: 294px;
  padding: 16px 14px;
  background-color: ${({ isSelect }) => !isSelect ? '#EBEBEB' : '#FFEED2'};
  border-radius: 10px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 168px;
  height: 109px;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
