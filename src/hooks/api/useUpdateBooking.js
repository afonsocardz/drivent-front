import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useUpdateBooking() {
  const token = useToken();

  const {
    loading: saveUpdateLoading,
    error: saveUpdateError,
    act: updateBooking,
  } = useAsync((data) => bookingApi.updateBooking(data, token), false);

  return {
    saveUpdateLoading,
    saveUpdateError,
    updateBooking
  };
}
