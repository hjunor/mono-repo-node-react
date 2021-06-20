import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Art from '../../Assets/art3.jpg';

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

export const WrapperImg = styled.div`
  margin-top: 30px;
  background: url(${Art}) no-repeat center center;
  border-radius: 2px;
  background-size: cover;
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: ‘translate(-50%, -50%) ’;

  div span {
    font-size: 5rem;
    color: #fff;
    font-weight: bold;

    text-transform: uppercase;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }
  div p {
    margin-top: 70px;
    margin-bottom: 70px;
    color: #fff;
    max-width: 800px;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }
`;

export const ButtonLink = styled(Link)`
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

export const Card = styled.div`
  background: linear-gradient(to right, #d763cd, #8f44fd);
  width: 300px;
  height: 400px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 8px;
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

export const WrapperLeft = styled.div`
  margin: 30px;
  width: 50%;
`;
export const WrapperRight = styled.div`
  margin: 30px;
  width: 50%;
  display: flex;
  justify-content: center;
`;
