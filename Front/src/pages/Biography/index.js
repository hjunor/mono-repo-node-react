import React, { useContext } from 'react';
import { UserContext } from '../../store/userContext';

import { Container } from './styles';

function Biography() {
  const { bio, bank, user } = useContext(UserContext);
  console.log({ bio, bank });
  return (
    <Container>
      <div className="card">
        <img src="" alt="profile" />
        <div>Name: {user.username}</div>
        <div>Facebook:{bio.facebook}</div>
        <div>Instagram:</div>
        <div>Data:</div>
        <div>Portifolio:</div>
      </div>

      <div className="card">
        <div>Conta: {user.username}</div>
        <div>Agencia:{bio.facebook}</div>
        <div>doc:</div>
        <div>Nome:</div>
        <div>Proprietario:</div>
        <div>Tipo:</div>
      </div>

      <button>editar</button>
    </Container>
  );
}

export default Biography;
