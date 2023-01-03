import styled from 'styled-components';
import useSaveBooking from '../../hooks/api/useSaveBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';
import { useHotelsContext } from '../../contexts/HotelsInfoContext';

export default function RegisterBooking({ roomSelected, hasBooking }) {
  const { saveBooking } = useSaveBooking();
  const { updateBooking } = useUpdateBooking();
  const { getHotelsInfo } = useHotelsContext();

  const textHandler = !hasBooking ? 'Reservar quarto' : 'Trocar quarto';

  function newBooking() {
    const body = { roomId: roomSelected };
    const postB = saveBooking(body);
    postB.then((data) => getHotelsInfo()).catch((err) => console.log(err));
  }

  function changeRoom() {
    const body = { roomId: roomSelected };
    const updateB = updateBooking(body, hasBooking.bookingId);
    updateB.then((data) => getHotelsInfo()).catch((err) => console.log(err));
  }

  return (
    <Reserved onClick={!hasBooking ? newBooking : changeRoom}>{textHandler}</Reserved>
  );
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
