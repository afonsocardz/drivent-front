import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelOption from './HotelOption';
import { useState } from 'react';
import RoomsSelection from '../RoomSelection/index.js';
import { useHotelsContext } from '../../contexts/HotelsInfoContext';

export default function HotelSelection() {
  const { hotels } = useHotelsContext();
  const [selected, setSelected] = useState({ hotel: null });
  return (
    <Container>
      <StyledTypography variant="h4">Escolha de Hotel e Quarto</StyledTypography>
      <SubTitle>{!hotels[0].hasBooking ? 'Primeiro, escolha seu hotel:' : 'Você já escolheu seu quarto:'}</SubTitle>
      <HotelsWrapper>
        {hotels &&
          hotels.map((hotel) => (
            <HotelOption key={hotel.id} setSelected={setSelected} selected={selected} hotel={hotel}></HotelOption>
          ))}
      </HotelsWrapper>
      {selected.hotel && <RoomsSelection hotelSelected={selected.hotel} />}
      {hotels[0].hasBooking && !selected.hotel && <ChangeRoomButton onClick={() => setSelected({ hotel: hotels[0] })}>Trocar de quarto</ChangeRoomButton>}
    </Container>
  );
}

const Container = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const HotelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 36px !important;
`;

const SubTitle = styled.h5`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const ChangeRoomButton = styled.button`
  all: unset;
  width: 196px;
  height: 40px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;

  cursor: pointer;
`;
