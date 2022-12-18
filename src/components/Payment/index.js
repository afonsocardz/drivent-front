import { useEffect, useState } from 'react';
import { getTicket } from '../../services/ticketsApi';
import OrderTicket from './OrderTicket';
import PaymentScreen from './PaymentScreen';

export default function PaymentData() {
  const [render, setRender] = useState(<></>);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const token = JSON.parse(userData).token;
      
    const promise = getTicket(token);
    promise.then((promise) => setRender(<PaymentScreen data={promise}/>));
    promise.catch(() => setRender(<OrderTicket/>));
  }, []);

  return render;
}
