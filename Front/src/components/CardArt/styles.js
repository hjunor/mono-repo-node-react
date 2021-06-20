import styled from 'styled-components';

const green = '#29A377';
const blue = '#56b5d0';
const redLigth = '#cb537a';

const aproved = (prop) => {
  if (prop === true) {
    return green;
  } else if (prop === false) {
    return redLigth;
  } else {
    return blue;
  }
};
export const Container = styled.div`
  width: 350px;
  height: 500px;
  background: #202020;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px auto;
  padding-top: 20px;

  div {
    width: 86%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: -2px 3px 26px -5px rgba(0, 0, 0, 1);
    padding: 10px;
    border-radius: 8px;
  }
`;
export const StylesImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
`;
export const StylesName = styled.span`
  margin: 0 0 10px 0;
  color: #e0e0e0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesDesc = styled.p`
  margin: 0 0 10px 0;

  color: #e0e0e0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesStatus = styled.span`
  color: ${(props) => aproved(props.aproved)};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;

export const StylesBold = styled.span`
  font-weight: bold;
`;
