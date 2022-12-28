import { IoPersonOutline } from 'react-icons/io5';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import { memo } from 'react';

const Option = ({ option, roomSelected, clickHandler, isFull }) => {
  return (
    <IconContainer  >
      {!option.isReserved && option.id !== roomSelected.optionId ? <IoPersonOutline onClick={() => clickHandler(option.id)} /> : <IconFilled isFull={isFull} selection={{ id: option.id, selectionId: roomSelected.optionId }} />}
    </IconContainer>
  );
};

export default memo(Option);

const IconContainer = styled.div`
  font-size: 20px;
  margin: 0 4px;
`;

const IconFilled = styled(BsFillPersonFill)`
  color: ${({ selection: { id, selectionId }, isFull }) => {
    if (isFull) {
      return 'gray';
    }
    return id !== selectionId ? '#000' : '#FF4791';
  }};
`;
