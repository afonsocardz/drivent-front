import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import useActivities from '../../hooks/api/useActivities.js';
import Activities from './Activities.js';

export default function ActivitySelection() {
  const [daySelected, setDaySelected] = useState();
  const [activities, setActivities] = useState();
  const { getActivities } = useActivities();

  // TODO remover espaço após async
  useEffect(async() => {
    const Allactivities = await getActivities();
    setActivities(Allactivities);
  }, []);

  return (
    <Container>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <SubTitle> {daySelected ? '' : 'Primeiro, filtre pelo dia do evento:'} </SubTitle>
      <ContainerButtons>
        {activities ? activities.daysFiltered.map((date) => renderButtonsSelectDay({ date, daySelected })) : ''}
      </ContainerButtons>
      {daySelected ? (
        <Activities activities={activities.activitiesValids.filter((act) => act.day === daySelected)} />
      ) : (
        ''
      )}
    </Container>
  );

  function renderButtonsSelectDay({ date, daySelected }) {
    const day = date.day;
    const dayNumber = day;
    const weekDay = date.weekDay;
    return (
      <Button onClick={() => setDaySelected(day)} key={day} selected={day} daySelected={daySelected}>
        {weekDay}, {dayNumber}
      </Button>
    );
  }
}

const colorButton = '#e0e0e0';
const colorButtonSelected = '#FFD37D';

const Container = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 36px !important;
`;

const SubTitle = styled.h5`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const ContainerButtons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Button = styled.div`
  width: 130px;
  height: 38px;
  font-size: 14px;
  background-color: ${({ selected, daySelected }) => (selected === daySelected ? colorButtonSelected : colorButton)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    height: 42px;
    width: 132px;
  }
`;
