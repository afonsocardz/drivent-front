import { Card } from '@material-ui/core';
import styled from 'styled-components';

export default function SelectBox( { type, price, state, setState } ) {
  return (
    <SelectBoxDiv type={type} state={state} onClick={() => setState(type)}>
      <h1>{type}</h1>
      <span>R${price/100}</span>
    </SelectBoxDiv>
  );
}

const SelectBoxDiv = styled.div`
  width: 145px;
  height: 145px;
  margin-left: 24px;
  margin-bottom: 45px;
  border: 1px solid #CECECE;
  border-radius: 20px;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:${props => props.type === props.state ? '#FFEED2':'#FFFFFF'};

  cursor: pointer;

  h1{
    font-family: 'Roboto';
    font-size: 16px;
    margin-bottom: 5px;
  }

  span{
    font-family: 'Roboto';
    font-size: 14px;
    color: #868686;
  }
`;
