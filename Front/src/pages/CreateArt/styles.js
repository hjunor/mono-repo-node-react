import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
`;

export const StylesPreview = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  border-radius: 0.5rem;
  background-size: cover;
  background-position: center center;
  width: 600px;
  height: 600px;
  object-fit: cover;

  :after {
    content: '';
    display: block;
    height: 0px;
    padding-bottom: 100%;
  }
`;

export const Input = styled.input`
  border: 1px solid #eee;
  display: block;
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
export const StylesSelect = styled.select`
  margin-top: 8px;
  width: 100%;
  font-size: 1rem;
  padding: 0.6em 0.6em;
  background: #e0e0e0;
  color: #222;
  border-radius: 8px;
  border: none;
`;

export const StylesButton = styled.button`
  width: 100px;
  margin: 30px auto;
  border-radius: 8px;
  background: #56b5d0;
  color: #e0e0e0;
  border: none;
  padding: 1rem;
`;

export const StylesLabel = styled.label`
  font-size: 1rem;
  color: #e0e0e0;
  margin-top: 10px;
`;
