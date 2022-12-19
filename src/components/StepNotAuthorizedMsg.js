import styled from 'styled-components';

export default function StepNotAuthorizedMsg({ message }) {
  return (
    <>
      <NotAuthorizedMsg>{message}</NotAuthorizedMsg>
    </>
  );
}

const NotAuthorizedMsg = styled.p`
  color: #8E8E8E;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
`;
