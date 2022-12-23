import { IoPersonOutline } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function IconCapacity(room, roomIdInBooking) {
  console.log(room.id, roomIdInBooking);
  function renderIcons(room) {
    const arr = [];
    for (let i = 0; i < room.capacity; i++) {
      if (room._count.Booking > i) {
        if(i === 0 && room.id === roomIdInBooking) {
          arr.push(<BsFillPersonFill key={i} color={'#FF4791'}/>);
        } else {
          arr.push(<BsFillPersonFill key={i}/>);
        }
      } else {
        arr.push(<IoPersonOutline key={i}/>);
      }
    }
    return arr;
  }
  
  function checkRoom({ Booking }) {
    if (Booking >= 1) return true;
  }

  return <Icon isReserved={checkRoom(room._count)} roomIdInBooking={roomIdInBooking} roomId={room.id}>{renderIcons(room)}</Icon>;
}

const Icon = styled.div`
  font-size: 20px;
  margin: 0 4px;
  color: black;
`;
