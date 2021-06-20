import React, { useContext, useEffect, useState } from 'react';
import CardAdm from '../../components/CardAdm';
import Modal from '../../components/Modal';
import { UserContext } from '../../store/userContext';

import { Container } from './styles';

function ArtsAdm() {
  const { artListAdm, art } = useContext(UserContext);
  const [modalPhoto, setModalPhoto] = useState();

  useEffect(() => {
    artListAdm();
  }, []);

  return (
    <>
      {modalPhoto && <Modal data={modalPhoto} setModal={setModalPhoto} />}
      <Container>
        {art &&
          art.map((item) => (
            <CardAdm
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.image}
              description={item.description}
              aproved={item.aproved}
              exclusivity={item.exclusivity}
              setModal={setModalPhoto}
            />
          ))}
      </Container>
    </>
  );
}

export default ArtsAdm;
