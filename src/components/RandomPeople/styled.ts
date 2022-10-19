import styled from "styled-components";

export const Wrapper = styled.div<{ grid: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
  gap: 2rem;
  width: 100%;
  max-width: 60rem;
  padding: 1rem 0rem;
  @media (max-width: 600px) {
    grid-template-columns: ${(props) =>
      props.grid ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  }
  @media (max-width: 400px) {
    gap: 1rem;
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
