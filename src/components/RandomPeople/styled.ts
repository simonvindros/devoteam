import styled from "styled-components";

export const Wrapper = styled.div<{ grid: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid ? "repeat(3, 1fr)" : "repeat(1, 1fr)"};
  gap: 2rem;
  max-width: 60rem;
  padding: 1rem 0rem;
  @media (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.grid ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: purple;
`;
