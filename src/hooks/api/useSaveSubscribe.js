import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useSaveSubscribe() {
  const token = useToken();
  
  const {
    loading: saveSubscribeLoading,
    error: saveSubscribeError,
    act: saveSubscribe,
  } = useAsync((data) => activityApi.postSubscribe(data, token), false);

  return {
    saveSubscribeLoading,
    saveSubscribeError,
    saveSubscribe,
  };
}
