import HotelSelection from '../../../components/HotelSelection';
import useHotels from '../../../hooks/api/useHotels';
import StepNotAuthorizedMsg from '../../../components/StepNotAuthorizedMsg';
import { CircularProgress } from '@material-ui/core';

export default function Hotel() {
  const { hotels, hotelsError, hotelsLoading } = useHotels();

  function hotelHandler() {
    if (hotelsError) {
      return <StepNotAuthorizedMsg message={hotelsError.data} />;
    }
    if (hotelsLoading) {
      return <CircularProgress />;
    }
    return <HotelSelection hotels={hotels} />;
  }
  return (
    <>
      {hotelHandler()}
    </>
  );
}
