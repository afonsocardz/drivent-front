import styled from 'styled-components';
import SelectBox from './SelectBox';

export default function SelectType({ state, setState }) {
  return(
    <SelectContent>
      <SelectBox type="Presencial" price={25000} state={state} setState={setState}/>
      <SelectBox type="Online" price={10000} state={state} setState={setState}/>
    </SelectContent>
  );
}

const SelectContent = styled.div`
    display: flex;
`;
