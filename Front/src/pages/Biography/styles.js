import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  button {
    border-radius: 8px;
    margin-left: 50%;
    margin-right: 50%;
    margin-top: 30px;
    border: none;
    padding: 20px;
    color: #e0e0e0;
    background: #56b5d0;
    width: 100px;
  }

  .cardBio {
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    background: #202020;
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
      margin: 0 auto;
    }

    div {
      margin: 10px;
      background: #303030;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
    }
  }
  .cardBank {
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    margin-left: 30px;
    background: #202020;
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      margin: 0 0 20px 0;
      background: #303030;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
    }
  }
`;

export const ButtonLink = styled(Link)`
  width: 4rem;
  height: 2rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0 0.5rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
