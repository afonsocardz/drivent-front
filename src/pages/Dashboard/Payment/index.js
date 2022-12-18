import { getPersonalInformations } from '../../../services/enrollmentApi';
import { useEffect, useState } from 'react';

import PaymentData from '../../../components/Payment/index';
import NoEnrollment from '../../../components/Payment/NoEnrollment';

export default function Payment() {
  const [render, setRender] = useState(<></>);

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const token = JSON.parse(userData).token;
  
    const promise = getPersonalInformations(token);
    promise.then(() => setRender(<PaymentData/>));
    promise.catch(() => setRender(<NoEnrollment/>));
  }, []);

  return render;
}
