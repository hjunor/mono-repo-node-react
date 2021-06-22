import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        <div style={bio.facebook ? { opacity: 1 } : { opacity: 0.4 }}>
          Facebook:{bio.facebook ? bio.facebook : '   null'}
        </div>
        <div>Instagram:</div>
        <div>Data:</div>
        <div>Portifolio:</div>
      </div>

      <div className="card">
        <div>Conta: {user.username}</div>
        <div>Agencia:{bio.facebook ? bio.facebook : '  null'}</div>
        <div>doc:</div>
        <div>Nome:</div>
        <div>Proprietario:</div>
        <div>Tipo:</div>
      </div>

      <Link to="/conta/biografia/editar">Editar</Link>
    </Container>
  );
}

export default Biography;
