import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketsApi';

export default function useTicketType() {
  const token = useToken();
  
  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType
  } = useAsync(() => ticketApi.getTicketTypes(token));

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType
  };
}
