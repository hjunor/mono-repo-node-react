import React, { useContext } from 'react';
import { UserContext } from '../../store/userContext';

import {
  Container,
  ButtonLink,
  LogoLink,
  ButtonLogout,
  WrapperEnter,
  WrapperLogo,
  WrapperUser,
  Nav,
} from './styles';

function NavBar() {
  const { login, user, userLogout, adm } = useContext(UserContext);
  return (
    <Container>
      <Nav>
        <WrapperLogo>
          <LogoLink color="#e5e5e5e5" to="/">
            LOGO
          </LogoLink>
        </WrapperLogo>

        {login ? (
          <WrapperUser>
            {adm ? (
              <ButtonLink color="#e5e5e5e5" to="/dash/artes">
                Artes
              </ButtonLink>
            ) : (
              <>
                <ButtonLink color="#e5e5e5e5" to="/conta/artes">
                  Artes
                </ButtonLink>
                <ButtonLink color="#e5e5e5e5" to="/conta/criar">
                  Enviar
                </ButtonLink>
              </>
            )}
            <ButtonLink
              disabled
              style={{ display: 'flex' }}
              to={adm ? '/dash' : '/account'}
              color="#e5e5e5e5"
            >
              <p style={{ marginRight: '10px', color: '#bb86fc' }}>
                {adm ? 'Adiminstrador' : 'Bem vindo!'}
              </p>
              {user && user.username}
            </ButtonLink>
            <ButtonLogout onClick={userLogout}>sair</ButtonLogout>
          </WrapperUser>
        ) : (
          <WrapperEnter>
            <ButtonLink to="/conta/" color="#e5e5e5e5">
              Sobre
            </ButtonLink>
            <ButtonLink to="/conta/" color="#e5e5e5e5">
              Catalogo
            </ButtonLink>
            <ButtonLink to="/conta/" color="#e5e5e5e5">
              Entrar
            </ButtonLink>
          </WrapperEnter>
        )}
      </Nav>
    </Container>
  );
}

export default NavBar;
