import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`;

export const StylesContainer = styled.div`
  background: #1f1f1f;
  width: 100%;
  height: 40rem;
  margin-top: 2rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StylesCard = styled.div`
  width: 20rem;
  height: 30rem;
  background-color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  ::after {
    position: absolute;
    content: '';
    left: 230px;
    top: -30px;
    overflow: hidden;
    border-radius: 8px;
    z-index: -1;

    width: 8rem;
    height: 8rem;
    background: linear-gradient(to right, #d763cd, #8f44fd);
  }
`;
export const StylesImg = styled.img`
  margin: 0 auto;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 16px solid #8f44fd;
  transition: 0.7s ease;
`;

export const StylesContent = styled.div`
  width: 90%;
  height: 90%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const StylesContentText = styled.div`
  width: 90%;
  height: 90%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
export const StylesText = styled.h2`
  font-weight: normal;
  color: #e5e5e5e5;
  font-size: 1rem;
  text-align: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

export const StylesButton = styled.button`
  border: none;
  background: linear-gradient(to right, #d763cd, #8f44fd);
  width: 60%;
  color: #fff;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 8px;
  padding: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  border: none;
  background: linear-gradient(to right, #d763cd, #8f44fd);
  color: #fff;
  width: 60%;
  text-align: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 8px;
  padding: 17px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
// export const StylesCard = styled.div``;
