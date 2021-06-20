import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Img from '../../Assets/login.jpg';

export const Section = styled.div`
  display: grid;
  background: transparent;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  :before {
    content: '';
    display: block;
    background: url(${Img}) no-repeat center center;
    background-size: cover;
    border-radius: 8px;
    margin-top: 10px;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    .login::before {
      display: none;
    }
  }
`;

export const FormStyles = styled.div`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  background: #1f1f1f;
  border-radius: 8px;
  padding: 15px;
  height: ${(props) => props.height};
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StylesTitle = styled.h1`
  font-size: 2rem;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';

  margin-bottom: 2rem;
  position: relative;
  ::after {
    position: absolute;
    content: '';
    left: ${(p) => p.left};
    top: -15px;
    overflow: hidden;
    border-radius: 8px;
    z-index: -1;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(to right, #d763cd, #8f44fd);
  }
`;

export const StylesButton = styled.button`
  border: none;
  background: linear-gradient(to right, #d763cd, #8f44fd);
  color: #fff;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 8px;
  padding: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

export const StylesLink = styled(Link)`
  font-size: 1rem;
  padding: 10px;
  border-radius: 8px;
  margin-left: 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;
