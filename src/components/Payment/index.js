import { useState } from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import SelectHotel from './SelectHotel';
import SelectType from './SelectType';
import ReserveTicket from './ReserveTicket';

export default function PaymentForm() {
  const [selected, setSelected] = useState();
  const [ hotel, setHotel ] = useState();

  const bill = selected === 'Online' ? 10000 : hotel === 'Sem Hotel' ? 25000 : 60000;

  return (
    <>
      <StyledTypography variant='h4'>Pagamento</StyledTypography>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <SelectType state={selected} setState={setSelected}></SelectType>
      {selected === 'Presencial' ?  <SelectHotel state={hotel} setState={setHotel}></SelectHotel>:''}
      {selected === 'Online' || hotel ? <ReserveTicket bill={bill}/>:''}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const SubTitle = styled.h5`
  font-family: Roboto;
  font-size: 20px;
  color: #8E8E8E;

  margin-bottom: 20px;
`;
