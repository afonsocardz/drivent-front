import { AiFillCheckCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function PaymentConfirm() {
  return(
    <>
      <Title>Pagamento</Title>
      <Div>
        <AiFillCheckCircle color='green' size={40}/>
        <TextBox>
          <p>Pagamento Confirmado!</p>
          <span>Prossiga para a escolha de hospedagem e atividades!</span>
        </TextBox>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  margin-left: 35px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: #8E8E8E;
  margin-left: 35px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  p{
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
  }

  span{
    font-family: 'Roboto';
    font-size: 16px;
  }
`;
