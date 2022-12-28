import styled from 'styled-components';
import Option from './Option.js';

export default function RoomsOption({ room, setRoomSelected, roomSelected, hasBooking }) {
  function clickHandler(optionId) {
    if (hasBooking) {
      if (hasBooking.roomId === room.id) return;
    }
    setRoomSelected({ roomId: room.id, optionId });
  }
  return (
    <Room
      isSelect={roomSelected.roomId}
      capacity={room.capacity}
      id={room.id}
      booking={room._count.Booking}
    >
      <Number>{room.name}</Number>
      {room.options.map(option =>
        <Option
          key={option.id}
          option={option}
          roomSelected={roomSelected}
          clickHandler={clickHandler}
          isFull={room.capacity === room._count.Booking} />
      )}
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

  background-color: ${({ isSelect, id }) => (isSelect === id ? '#FFEED2' : '')};
  background-color: ${({ capacity, booking }) => (capacity === booking ? '#EBEBEB' : '')};
  color: ${({ capacity, booking }) => (capacity === booking ? '#8B8B8B' : '')};

  cursor: pointer;
`;

const Number = styled.div`
  font-size: 16px;
`;
