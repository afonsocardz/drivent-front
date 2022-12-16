import { getPersonalInformations } from '../../../services/enrollmentApi';
import { useEffect, useState } from 'react';

import PaymentForm from '../../../components/Payment';
import NoEnrollment from '../../../components/Payment/NoEnrollment';

export default function Payment() {
  const [render, setRender] = useState(<></>);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const token = JSON.parse(userData).token;
  
    const promise = getPersonalInformations(token);
    promise.then(() => setRender(<PaymentForm/>));
    promise.catch(() => setRender(<NoEnrollment/>));
  }, []);

  return render;
}
