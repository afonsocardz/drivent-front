import { IoPersonOutline } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function IconCapacity(room) {
  return <Icon isReserved={checkRoom(room._count)}>{renderIcons(room)}</Icon>;

  function renderIcons(room) {
    const arr = [];
    for (let i = 0; i < room.capacity; i++) {
      if (room._count.Booking >= 1) {
        arr.push(<BsFillPersonFill />);
      } else {
        arr.push(<IoPersonOutline />);
      }
    }
    return arr;
  }

  function checkRoom({ Booking }) {
    if (Booking >= 1) return true;
  }
}

const Icon = styled.div`
  font-size: 20px;
  margin: 0 4px;
  color: black;
`;
