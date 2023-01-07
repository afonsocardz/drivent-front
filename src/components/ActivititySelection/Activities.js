import styled from 'styled-components';

export default function Activities({ activities }) {
  return (
    <Container>
      <AuditoriumMain>
        <Title>Auditório Principal</Title>
        <ContainerActivities>
          {activities.map((act) => {
            if (act.Place.name === 'Auditório Principal') return renderCards(act);
          })}
        </ContainerActivities>
      </AuditoriumMain>

      <AuditoriumSide>
        <Title>Auditório Lateral</Title>
        <ContainerActivities>
          {activities.map((act) => {
            if (act.Place.name === 'Auditório Lateral') return renderCards(act);
          })}
        </ContainerActivities>
      </AuditoriumSide>

      <WorkshopRoom>
        <Title>Sala de Workshop</Title>
        <ContainerActivities>
          {activities.map((act) => {
            if (act.Place.name === 'Sala de Workshop') return renderCards(act);
          })}
        </ContainerActivities>
      </WorkshopRoom>
    </Container>
  );

  function renderCards(act) {
    return (
      <ActivityCard>
        <InfoActivity>
          <h1>{act.name}</h1>
          <h2>
            {act.startTime[0]} - {act.endTime[3]}
          </h2>
        </InfoActivity>
        <DiviserCardActivity />
      </ActivityCard>
    );
  }
}

const Container = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  height: 460px;
  display: flex;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  color: #7b7b7b;
`;

const AuditoriumMain = styled.div`
  width: 33%;
`;

const AuditoriumSide = styled.div`
  width: 33%;
`;

const WorkshopRoom = styled.div`
  width: 33%;
`;

const ContainerActivities = styled.div`
  border: solid 1px #d7d7d7;
  height: 90%;
`;

const ActivityCard = styled.div`
  background-color: #f1f1f1;
  margin: 9px 14px 10px 9px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;

  //adicionar valor inteiro para dimensionar altura do card, via props
  height: ${1 * 80}px;
`;

const InfoActivity = styled.div`
  width: 70%;
  margin-right: 8px;

  //name activity
  h1 {
    font-weight: bold;
    margin-bottom: 6px;
    line-height: 14px;
  }
`;

const DiviserCardActivity = styled.div`
  width: 1px;
  background-color: #cfcfcf;

  //adicionar valor inteiro para dimensionar altura da divisão, via props
  height: ${1 * 100}%;
`;
