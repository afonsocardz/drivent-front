import useTicket from '../../hooks/api/useTicket';
import OrderTicket from './OrderTicket';
import PaymentScreen from './PaymentScreen';

export default function PaymentData() {
  const { ticket } = useTicket();

  if( ticket ) {
    return <PaymentScreen data={ticket}/>;
  } else {
    return <OrderTicket/>;
  }
}
