import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import CreditCardForm from './CreditCardForm';
import PaymentConfirm from './PaymentConfirm';

export default function PaymentScreen( { data } ) {
  const [ paid, setPaid ] = useState(false);
  let status = false;

  const { ticket } = useTicket();

  useEffect(() => {
    if(ticket) {
      if(ticket.status === 'PAID') {
        setPaid(true);
      }
    }
  } );

  return(
    <>
      <Title>Ingresso e Pagamento</Title>
      <SubTitle>Ingresso Escolhido</SubTitle>
      <TicketBox>
        <p>{data.TicketType.includesHotel ? 'Presencial + Hotel': data.TicketType.isRemote ? 'Online': 'Presencial sem Hotel'}</p>
        <span>R$ {data.TicketType.price /100}</span>
      </TicketBox>
      {paid ? <PaymentConfirm/>:<CreditCardForm/>}
    </>
  );
}

const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 34px;
  margin-left: 35px;
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  font-family: 'Roboto';
  margin-left: 35px;
  margin-bottom: 17px;
  font-size: 20px;
  color: #8E8E8E;
`;

const TicketBox = styled.div`
  width: 290px;
  height: 108px;
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: #FFEED2;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Roboto';
    font-size: 16px;
  }

  span {
    font-family: 'Roboto';
    font-size: 14px;
    color: #898989;
  }
`;
