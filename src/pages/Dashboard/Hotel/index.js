
import HotelSelection from '../../../components/HotelSelection';
import useHotels from '../../../hooks/api/useHotels';
import StepNotAuthorizedMsg from '../../../components/StepNotAuthorizedMsg';

export default function Hotel() {
  const { hotels, hotelsError } = useHotels();
  return (
    <>
      {!hotelsError ? <HotelSelection hotels={hotels} /> : <StepNotAuthorizedMsg message={hotelsError.data} />}
    </>
  );
}
