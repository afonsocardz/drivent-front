import HotelSelection from '../../../components/HotelSelection';
import { HotelsInfoProvider } from '../../../contexts/HotelsInfoContext';

export default function Hotel() {
  return (
    <HotelsInfoProvider>
      <HotelSelection />
    </HotelsInfoProvider>
  );
}
