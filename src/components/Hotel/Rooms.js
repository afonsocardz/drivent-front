import styled from 'styled-components';
import { getRooms } from '../../services/roomApi.js';
import { useState, useEffect } from 'react';
import useToken from '../../hooks/useToken.js';

export default function Rooms() {
  const token = useToken();
  //console.log(token);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms(50, token)
      .then((res) => setRooms(res))
      .catch((res) => console.log(res));
  }, []);

  return <Container>{rooms.map((item) => <renderRooms />)}</Container>;

  function renderRooms() {
    return <>room</>;
  }
}

const Container = styled.div``;
