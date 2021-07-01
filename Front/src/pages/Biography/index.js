import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/userContext';

import { Container, ButtonLink } from './styles';

function Biography() {
  const { bio, bank, user } = useContext(UserContext);
  console.log({ bio, bank });
  return (
    <Container>
      <ButtonLink type="button" to="/conta/biografia/editar">
        Editar
      </ButtonLink>

      <div className="cardBio">
        <img src={bio?.photo ? bio.photo : 'null'} alt="profile" />
        <div>Name: {user.username}</div>
        <div style={bio?.facebook ? { opacity: 1 } : { opacity: 0.4 }}>
          Facebook:{bio?.facebook ? bio.facebook : '   null'}
        </div>
        <div>Instagram:{bio?.instagram ? bio.instagram : '   null'}</div>
        <div>Data:{bio?.bithDate ? bio.bithDate : '   null'}</div>
        <div>
          Portifolio:{bio?.portifolioLink ? bio.portifolioLink : '   null'}
        </div>
        <div>Resumo:{bio?.resumer ? bio.resumer : '   null'}</div>
      </div>

      <div className="cardBank">
        <div>Banco: {bank?.name ? bank.name : '  null'}</div>
        <div>Conta: {bank?.account ? bank.account : '  null'}</div>
        <div>Agencia:{bank?.agency ? bank.agency : '  null'}</div>
        <div>doc:{bank?.doc ? bank.doc : '  null'}</div>
        <div>Tipo:{bank?.type ? bank.type : '  null'}</div>
        <div>Proprietario:{bank?.owner ? bank.owner : '  null'}</div>
      </div>
    </Container>
  );
}

export default Biography;
