import ActivitiesInfoProvider from '../../../contexts/ActivitiesInfoContext';
import ActivitySelection from '../../../components/ActivititySelection';

export default function Activities() {
  return (
    <ActivitiesInfoProvider>
      <ActivitySelection />
    </ActivitiesInfoProvider>
  );
}
