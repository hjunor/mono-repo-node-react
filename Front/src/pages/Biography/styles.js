import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;

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

  .card {
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    background: #202020;
    width: 100%;
    height: 22rem;

    img {
      margin: 0 auto;
    }

    div {
      margin: 20px;
      background: #303030;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
    }
  }
`;
