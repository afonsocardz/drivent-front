import { IoPersonOutline } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

export default function Option({ option, setOptions, roomSelected }) {
  function clickHandler() {
    setOptions((prev) =>
      prev.map(item => {
        if (item.status === 'selected') {
          return { ...item, status: 'empty' };
        }
        if (item.id === option.id) {
          return { ...item, status: 'selected' };
        }
        return item;
      })
    );
  }

  function optionHandler() {
    if (option.status === 'empty') {
      return <IoPersonOutline onClick={clickHandler} />;
    }
    if (option.roomId === roomSelected) {
      return <IconFilled status={option.status} />;
    } else {
      return <IoPersonOutline onClick={clickHandler} />;
    }
  }

  return (
    <IconContainer >
      {optionHandler()}
    </IconContainer>
  );
}

const IconContainer = styled.div`
  font-size: 20px;
  margin: 0 4px;
`;

const IconFilled = styled(BsFillPersonFill)`
  color: ${({ status }) => status === 'reserved' ? '#000' : '#FF4791'};
`;
