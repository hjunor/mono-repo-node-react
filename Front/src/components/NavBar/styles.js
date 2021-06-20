import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonLink = styled(Link)`
  font-size: 0.9rem;
  color: ${(props) => props.color};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  transition: 0.5s ease;
  :hover {
    color: #ffffff;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 1.5rem;

  color: ${(props) => props.color};

  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

export const ButtonLogout = styled.button`
  :hover {
    color: #fff;
    background: #bb86fc;
  }
  width: 90px;
  height: 40px;
  color: #fff;
  background: transparent;
  border-radius: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;
export const Container = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 60px;
  background: #1f1f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;
export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

export const WrapperEnter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`;

export const Nav = styled.nav`
  width: 1200px;
  margin: 0 auto;
  height: 60px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
