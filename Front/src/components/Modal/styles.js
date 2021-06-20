import styled from "styled-components";

export const StylesModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`;
