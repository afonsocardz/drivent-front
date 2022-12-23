import styled from 'styled-components';

export default function HotelOption({ hotel, setSelected, selected }) {
  function clickHandler() {
    setSelected({ hotel });
  }

  function roommatesHandler(roommates) {
    return roommates > 0 ? 'Você e mais ' + roommates : 'Você';
  }

  function selectionHandler() {
    if (hotel.hasBooking) {
      return true;
    }
    if (selected.hotel) {
      if (selected.hotel.id === hotel.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <HotelContainer onClick={clickHandler} isSelect={selectionHandler()}>
      <ImageContainer>
        <Image src={hotel.image} alt="Fachada do hotel" />
      </ImageContainer>
      <HotelName>{hotel.name}</HotelName>
      <HotelTitle>{hotel.hasBooking ? 'Quarto reservado' : 'Tipos de Acomodação'}</HotelTitle>
      <HotelInfo>{hotel.hasBooking ? hotel.hasBooking.roomName : hotel.roomTypes}</HotelInfo>
      <HotelTitle>{hotel.hasBooking ? 'Pessoas no seu quarto' : 'Vagas disponíveis'}</HotelTitle>
      <HotelInfo>{hotel.hasBooking ? roommatesHandler(hotel.hasBooking.roommates) : hotel.vacancyQty}</HotelInfo>
    </HotelContainer>
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
  background-color: ${({ isSelect }) => (!isSelect ? '#EBEBEB' : '#FFEED2')};
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
