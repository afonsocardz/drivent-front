import { useState } from 'react';
import styled from 'styled-components';

export default function HotelOption({ hotel }) {
  const [isSelect, setIsSelect] = useState(false);

  function clickHandler() {
    setIsSelect(!isSelect);
  }

  return (
    <OptionContainer>
      <input onChange={clickHandler} type={'radio'} id={`hotel-${hotel.id}`} />
      <Label htmlFor={`hotel-${hotel.id}`}></Label>
      <HotelContainer isSelect={hotel.hasBooking ? true : isSelect}>
        <ImageContainer>
          <Image src={hotel.image} alt='Fachada do hotel' />
        </ImageContainer>
        <HotelName>{hotel.name}</HotelName>
        <HotelTitle>{'Tipo de Acomodação:'}</HotelTitle>
        <HotelInfo>{hotel.roomTypes}</HotelInfo>
        <HotelTitle>{'Vagas disponíveis:'}</HotelTitle>
        <HotelInfo>{hotel.vacancyQty}</HotelInfo>
      </HotelContainer>
    </OptionContainer>
  );
}

const Label = styled.label`
  top:0;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

const OptionContainer = styled.div`
  position: relative;
  width: 196px;
  height: 294px;
`;

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
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
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
