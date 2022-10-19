import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  background-color: #ebe9e4;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #ebe9e4;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.p`
  color: #e8cdad;
  margin: 0;
  font-family: "Poppins";
  font-weight: 600;
  font-size: clamp(1rem, 4vw, 3rem);
`;
