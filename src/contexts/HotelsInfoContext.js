import { createContext, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';

import useHotels from '../hooks/api/useHotels';
import StepNotAuthorizedMsg from '../components/StepNotAuthorizedMsg';
import useToken from '../hooks/useToken';

const HotelsInfoContext = createContext();

export const useHotelsContext = () => useContext(HotelsInfoContext);

export function HotelsInfoProvider({ children }) {
  const { hotels, hotelsLoading, hotelsError, getHotels } = useHotels();
  const token = useToken();

  if (hotelsError) {
    return <StepNotAuthorizedMsg message={hotelsError.data} />;
  }
  if (hotelsLoading) {
    return <CircularProgress />;
  }

  return (
    <HotelsInfoContext.Provider value={{ hotels, hotelsInfoError: hotelsError, getHotelsInfo: () => getHotels(token) }}>
      {children}
    </HotelsInfoContext.Provider>
  );
}
