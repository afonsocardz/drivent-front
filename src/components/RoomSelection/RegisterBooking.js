import styled from 'styled-components';
import useSaveBooking from '../../hooks/api/useSaveBooking';

export default function RegisterBooking({ roomSelected }) {
  const { saveBooking } = useSaveBooking();

  return <Reserved onClick={newBooking}>Reservar Quarto</Reserved>;

  function newBooking() {
    const body = { roomId: roomSelected };
    const postB = saveBooking(body);
    postB.then((data) => window.location.reload()).catch((err) => console.log(err));
  }
}

const Reserved = styled.button`
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
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
`;
