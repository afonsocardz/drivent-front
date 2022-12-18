import styled from 'styled-components';
import SelectBox from './SelectBox';

export default function SelectHotel({ state, setState }) {
  return(
    <>
      <SubTitle>Ótimo! Agora escolha sua modalidade de hospedagem</SubTitle>
      <SelectContent>
        <SelectBox type="Sem Hotel" price={0} state={state} setState={setState}/>
        <SelectBox type="Com Hotel" price={35000} state={state} setState={setState}/>
      </SelectContent>
    </>
  );
}

const SelectContent = styled.div`
    display: flex;
`;

const SubTitle = styled.h5`
  font-family: Roboto;
  font-size: 20px;
  color: #8E8E8E;

  margin-bottom: 20px;
`;
