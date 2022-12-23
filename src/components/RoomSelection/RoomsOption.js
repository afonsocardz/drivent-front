import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Option from './Option.js';

function optionInitialState(room, roomSelected) {
  const arr = [];
  const vacancies = room.capacity - room._count.Booking;
  for (let i = 0; i < room.capacity; i++) {
    const option = {
      id: i,
      status: 'empty',
      roomId: room.id,
    };
    if (i < vacancies) {
      arr.push(option);
    } else {
      if (roomSelected ) {
        arr.push({ ...option, status: 'selected' });
      } else {
        arr.push({ ...option, status: 'reserved' });
      }
    }
  }
  return arr;
}

export default function RoomsOption({ room, setRoomSelected, roomSelected }) {
  const [options, setOptions] = useState(optionInitialState(room, roomSelected));
  function roomChoice(room) {
    const isNotAvailable = room._count.Booking === room.capacity;

    isNotAvailable ?
      toast(`O quarto ${room.name} já está com sua capacidade máxima!`) :
      setRoomSelected(room.id);
  }

  return (
    <Room
      onClick={() => roomChoice(room)}
      isSelect={roomSelected}
      capacity={room.capacity}
      i={room.id}
      booking={room._count.Booking}
    >
      <Number>{room.name}</Number>
      {options[0] && options.map(option => <Option key={option.id} option={option} setOptions={setOptions} roomSelected={roomSelected} />)}
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
