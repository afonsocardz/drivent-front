import { useState } from 'react';
import styled from 'styled-components';
import useSaveTicket from '../../hooks/api/useSaveTicket';
import useTicketType from '../../hooks/api/useTicketType';

export default function ReserveTicket({ bill }) {
  const { ticketType }  = useTicketType();
  const { saveTicket } = useSaveTicket();

  let ticketTypeId;

  if(ticketType) {
    ticketTypeId = ticketType.filter(item =>  item.price === bill )[0].id;
  }
  
  return(
    <>
      <P>Fechado! O total ficou em <strong>R$ { bill / 100 }</strong>. Agora é só confirmar:</P>
      <Button onClick = {() => { 
        saveTicket({ ticketTypeId });
        window.location.reload();
      } }>RESERVAR INGRESSO</Button>
    </>
  );
}

const P = styled.p`
  strong{
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
  }

  font-family: Roboto;
  font-size: 20px;
  color: #8E8E8E;
`;

const Button = styled.button`
  all: unset;
  width: 160px;
  height: 40px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-top: 20px;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;

  cursor: pointer;
`;
