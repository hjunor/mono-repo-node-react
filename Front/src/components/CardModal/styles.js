import { CloudDownloadFill } from '@styled-icons/bootstrap';
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
export const StylesWrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Container = styled.div`
  width: 800px;
  height: 600px;
  background: #202020;
  border-radius: 16px;
`;

export const StylesFlex = styled.div`
  display: flex;
  width: 100%;
`;
export const StylesWrapper = styled.div`
  width: 100%;

  margin-top: 30px;
  display: flex;
  flex-direction: column;
  span,
  p,
  div {
    margin-top: 9px;
  }
`;

export const Icon = styled(CloudDownloadFill)`
  color: #f5f5f5;
  size: 128;
  width: 140px;
  height: 140px;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  margin: 30px;
  background: #333;
`;

export const StylesName = styled.span`
  color: #f6f6f6;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesDesc = styled.p`
  color: #f6f6f6;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesText = styled.p`
  color: #f6f6f6;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;

export const StylesButton = styled.button`
  color: ${(p) => p.color};
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 8px;
  background: ${(p) => p.background};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  cursor: pointer;
`;
export const StylesExclusive = styled.div`
  width: 32px;
  height: 32px;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.exclusivity ? green : redLigth)};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;

export const StylesArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  textarea {
    margin-top: 40px;
    width: 90%;
    background-color: #e0e0e0;
  }

  button {
    margin-top: 40px;
    margin-left: 20px;
  }
`;

export const StylesBold = styled.span`
  font-weight: bold;
`;

export const StylesStatus = styled.span`
  color: ${(props) => aproved(props.aproved)};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
