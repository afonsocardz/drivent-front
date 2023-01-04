import { createContext, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';

import useActivities from '../hooks/api/useActivities';
import StepNotAuthorizedMsg from '../components/StepNotAuthorizedMsg';
import useToken from '../hooks/useToken';

const ActivitiesInfoContext = createContext();

export const useActivitiesContext = () => useContext(ActivitiesInfoContext);

export default function ActivitiesInfoProvider({ children }) {
  const { activities, activitiesLoading, activitiesError, getActivities } = useActivities();
  const token = useToken();

  if (activitiesError) {
    return <StepNotAuthorizedMsg message={activitiesError.data} />;
  }
  if (activitiesLoading) {
    return <CircularProgress />;
  }

  return (
    <ActivitiesInfoContext.Provider value={{ activities, activitiesInfoError: activitiesError, getActivitiesInfo: () => getActivities(token) }}>
      {children}
    </ActivitiesInfoContext.Provider>
  );
}
