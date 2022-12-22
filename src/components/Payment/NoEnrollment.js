import styled from 'styled-components';

export default function NoEnrollment() {
  return(
    <Container>
      <p>
        Você precisa completar sua inscrição antes
      </p>
      <p>
        de prosseguir para escolha de ingresso
      </p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top:35%;

  p{
    font-family: Roboto;
    font-size: 20px;
    color: #8E8E8E;
  }
`;
