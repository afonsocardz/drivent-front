import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelOption from './HotelOption';
import { useState } from 'react';

export default function HotelSelection({ hotels }) {
  const [selected, setSelected] = useState({ hotel: null });
  return (
    <Container>
      <StyledTypography variant="h4">Escolha de Hotel e Quarto</StyledTypography>
      <SubTitle>{!hotels[0].hasBooking ? 'Primeiro, escolha seu hotel:' : 'Você já escolheu seu quarto:'}</SubTitle>
      <HotelsWrapper>
        {hotels && hotels.map((hotel) => <HotelOption key={hotel.id} setSelected={setSelected} selected={selected} hotel={hotel}></HotelOption>)}
      </HotelsWrapper>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const HotelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 36px!important;
`;

const SubTitle = styled.h5`
  color:#8E8E8E;
  font-size: 20px;
  margin-bottom: 18px;
`;
