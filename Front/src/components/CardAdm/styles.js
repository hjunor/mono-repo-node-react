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

export const Icon = styled(CloudDownloadFill)`
  color: #f5f5f5;
  size: 128;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px;
  margin: 8px;
  background: #333;
`;

export const Container = styled.div`
  width: 100%;
  height: 120px;
  background: #202020;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px auto;
  padding-top: 0;
`;
export const StylesImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;
`;
export const StylesSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 0 10px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  div {
    display: flex;
    justify-content: space-around;
  }
`;
export const StylesExclusive = styled.div`
  margin-right: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 4px;
  background-color: ${(p) => (p.exclusivity ? green : redLigth)};
  text-align: center;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 80%;
`;
export const StylesName = styled.span`
  color: #e0e0e0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
export const StylesDesc = styled.p`
  color: #e0e0e0;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
// export const StylesStatus = styled.button`
//   color: #e0e0e0;
//   width: 200px;
//   height: 35px;
//   border: none;
//   border-radius: 8px;
//   background: ${(p) => aproved(p.aproved)};
//   font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
// `;
export const StylesButton = styled.button`
  color: #e0e0e0;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 8px;
  border: 2px solid #bb86fc;
  background-color: #202020;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  cursor: pointer;

  :hover {
    background-color: #bb86fc;
    color: #e0e0e0;
  }
`;
export const StylesStatus = styled.span`
  color: ${(props) => aproved(props.aproved)};
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
`;
