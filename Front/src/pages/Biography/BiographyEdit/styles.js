import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-top: 30px;
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

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 30px;
    margin-top: 30px;
    background: #202020;
    width: 100%;
    height: 38rem;

    img {
      margin: 0 auto;
    }

    label {
      font-size: 2rem;
      margin: 20px 0 30px 0;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid #eee;
  width: ${(props) => (props.width ? props.width : '40vh')};
  height: ${(props) => (props.height ? props.height : '14px')};
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: ${(props) => (props.background ? props.background : '#e0e0e0')};
  margin-top: 5px;
  margin-bottom: 5px;
  :focus,
  :hover {
    outline: none;
    background: #e0e0e8;
  }
`;
