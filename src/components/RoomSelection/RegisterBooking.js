import styled from 'styled-components';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';

export default function RegisterBooking({ roomSelected, booking }) {
  const { saveBooking } = useSaveBooking();
  const { updateBooking } = useUpdateBooking();

  function newBooking() {
    const body = { roomId: roomSelected };
    const postB = saveBooking(body);
    postB.then((data) => window.location.reload()).catch((err) => console.log(err));
  }

  function changeRoom() {
    const body = { roomId: roomSelected };
    const updateB = updateBooking(body);
    updateB.then((data) => window.location.reload()).catch((err) => console.log(err));  
  }

  if(!booking) {
    return <Reserved onClick={newBooking}>{roomSelected === 0 ? 'ESCOLHA UM QUARTO' : 'RESERVAR QUARTO'}</Reserved>;
  } else if(roomSelected !== booking.Room.id && roomSelected) {
    return <Reserved onClick={changeRoom}>TROCAR QUARTO</Reserved>;
  } else {
    return <></>;
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

  cursor: pointer;
`;
