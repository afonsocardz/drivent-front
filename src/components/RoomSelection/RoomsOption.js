import styled from 'styled-components';
import IconCapacity from './IconCapacity.js';
import { toast } from 'react-toastify';

export default function RoomsOption({ room, index, setRoomSelected, roomSelected }) {
  function roomChoice(room) {
    if (room._count.Booking === room.capacity) {
      //TODO mensagem quarto sem vaga
      toast(`O quarto ${room.name} já está com sua capacidade máxima!`);
      return false;
    }
    setRoomSelected(room.id);
  }

  return (
    <Room
      onClick={() => roomChoice(room)}
      isSelect={roomSelected}
      i={index}
      capacity={room.capacity}
      booking={room._count.Booking}
    >
      <Number>{room.name}</Number>
      <Icon>{IconCapacity(room)}</Icon>
    </Room>
  );
}

const Room = styled.div`
  width: 196px;
  height: 40px;

  border: 1px solid #ebebeb;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 19px 10px 0;
  font-weight: bold;
  padding: 12px;

  background-color: ${({ isSelect, i }) => (isSelect === i ? '#FFEED2' : '')};
  background-color: ${({ capacity, booking }) => (capacity === booking ? '#EBEBEB' : '')};
  color: ${({ capacity, booking }) => (capacity === booking ? '#8B8B8B' : '')};

  cursor: pointer;
`;

const Number = styled.div`
  font-size: 16px;
`;

const Icon = styled.div`
  font-size: 20px;
  margin: 0 4px;
`;
