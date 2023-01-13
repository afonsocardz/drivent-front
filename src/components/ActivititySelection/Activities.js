import styled from 'styled-components';
import { RiLoginBoxLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import useSaveSubscribe from '../../hooks/api/useSaveSubscribe';
import { useActivitiesContext } from '../../contexts/ActivitiesInfoContext';

export default function Activities({ activities }) {
  const { saveSubscribe } = useSaveSubscribe();
  const { getActivitiesInfo } = useActivitiesContext();

  function newSubscribe(act) {
    if (act.capacity === 0) return toast('Atividade sem vagas disponíveis');
    if (act.userIsSubscribe) return toast('Você já se inscreveu nessa atividade');

    const body = { activityId: act.id };
    const postSubscribe = saveSubscribe(body);
    postSubscribe.then((res) => (toast(res.data), getActivitiesInfo())).catch((err) => console.log(err));
  }

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
    const vacancy = capacity === 1 ? 'vaga' : 'vagas';
    return (
      <ActivityCard
        durationRelation={act.durationMinutes / oneHour}
        userIsSubscribe={act.userIsSubscribe}
        key={act.id}
        onClick={() => newSubscribe(act)}
      >
        <InfoActivity>
          <h1>{act.name}</h1>
          <h2>
            {act.startTime} - {act.endTime}
          </h2>
        </InfoActivity>
        <DiviserCardActivity />

        <IconVacancy capacity={capacity} userIsSubscribe={act.userIsSubscribe}>
          {act.userIsSubscribe ? (
            <AiOutlineCheckCircle />
          ) : capacity > 0 ? (
            <RiLoginBoxLine />
          ) : (
            <AiOutlineCloseCircle />
          )}

          <p>{act.userIsSubscribe ? 'Inscrito' : capacity > 0 ? `${capacity} ${vacancy}` : 'Esgotado'}</p>
        </IconVacancy>
      </ActivityCard>
    );
  }
}

const IconVacancy = styled.div`
  color: ${({ capacity }) => (capacity > 0 ? '#078632' : '#CC6666')};
  color: ${({ userIsSubscribe }) => (userIsSubscribe ? '#078632' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 24px;
  flex-direction: column;

  p {
    font-size: 11px;
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
    margin-bottom: 20px;
  }
`;

const AuditoriumSide = styled.div`
  width: 33%;
  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const WorkshopRoom = styled.div`
  width: 33%;
  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const ContainerActivities = styled.div`
  border: solid 1px #d7d7d7;
  height: 90%;
  overflow: scroll;
`;

const ActivityCard = styled.div`
  margin: 9px 14px 10px 9px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ userIsSubscribe }) => (userIsSubscribe ? '#D0FFDB' : '#f1f1f1')};
  height: ${({ durationRelation }) => durationRelation * 80}px;

  &:hover {
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
  }
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
