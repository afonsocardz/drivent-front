import styled from 'styled-components';
import { useState } from 'react';
import { RiLoginBoxLine } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Activities({ activities }) {
  const [activitySelected, setActivitySelected] = useState(null);

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
    const oneHour = 60;
    const capacity = act.capacity;
    return (
      <ActivityCard durationRelation={act.durationMinutes / oneHour} key={act.id} onClick={() => subscriptionActivity(act)}>
        <InfoActivity>
          <h1>{act.name}</h1>
          <h2>
            {act.startTime} - {act.endTime}
          </h2>
        </InfoActivity>
        <DiviserCardActivity />

        <IconVacancy capacity={capacity}>
          {capacity > 0 ? <RiLoginBoxLine /> : <AiOutlineCloseCircle />}
          <p>{capacity > 0 ? `${capacity} vagas` : 'Esgotado'}</p>
        </IconVacancy>
      </ActivityCard>
    );
  }

  function subscriptionActivity(act) {
    console.log(act);
  }
}

const IconVacancy = styled.div`
  color: ${({ capacity }) => (capacity > 0 ? '#078632' : '#CC6666')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 24px;
  flex-direction: column;

  p {
    font-size: 9px;
    margin-top: 6px;
  }
`;

const Container = styled.div`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  height: 460px;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const AuditoriumSide = styled.div`
  width: 33%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const WorkshopRoom = styled.div`
  width: 33%;
  @media (max-width: 600px) {
    width: 80%;
  }
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
  height: ${({ durationRelation }) => durationRelation * 80}px;
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
  height: 100%;
`;
