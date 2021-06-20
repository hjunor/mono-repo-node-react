import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  line-height: 1;
  color: #e0e0e0e0;
  padding-bottom: 0.5rem;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;

export const InputValue = styled.input`
  border: 1px solid #eee;
  display: block;
  width: ${(props) => (props.width ? props.width : '40vh')};
  height: ${(props) => (props.height ? props.height : '14px')};
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: ${(props) => (props.background ? props.background : '#e0e0e0')};

  :focus,
  :hover {
    outline: none;
    /* border-color: #fb1; */
    background: #e0e0e8;
    /* box-shadow: 0 0 0 3px #; */
  }
`;

export const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
`;
