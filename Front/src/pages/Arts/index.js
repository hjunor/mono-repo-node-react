import React, { useContext, useEffect } from 'react';
import CardArt from '../../components/CardArt';
import { UserContext } from '../../store/userContext';

import { Container } from './styles';

function Arts() {
  const { artList, art } = useContext(UserContext);
  useEffect(() => {
    artList();
  });
  return (
    <Container>
      {art &&
        art.map((item) => (
          <CardArt
            key={item.id}
            name={item.name}
            img={item.image}
            description={item.description}
            aproved={item.aproved}
            reason={item.reason}
          />
        ))}
    </Container>
  );
}

export default Arts;
