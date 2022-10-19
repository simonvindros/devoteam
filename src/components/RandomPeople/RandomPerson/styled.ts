import styled from "styled-components";

export const GridCard = styled.div`
  display: flex;
  height: 30rem;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  svg {
    position: absolute;
  }
  @media (max-width: 900px) {
    height: 25rem;
  }
  @media (max-width: 700px) {
    height: 20rem;
  }
  @media (max-width: 500px) {
    height: 18rem;
  }
`;

export const ListCard = styled.div<{ backgroundColor: string }>`
  display: flex;
  height: 5.5rem;
  background-color: white;
  border-radius: 1rem;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
  justify-content: flex-end;
  overflow: hidden;
`;

export const WhiteBackgroundDiv = styled.div`
  display: flex;
  background-color: white;
  border-radius: 2rem 0 0 0;
  width: 90%;
`;

export const GridInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  gap: 1rem;
  @media (max-width: 700px) {
    gap: 0.5rem;
  }
`;

export const ListInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 90%;
  top: 0;
  bottom: 0;
  z-index: 100;
  gap: 1rem;
`;

export const Name = styled.h2<{ grid: boolean }>`
  margin: 0;
  font-family: "Poppins";
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 600;
  text-align: ${(props) => (props.grid ? "center" : "left")};
`;

export const Picture = styled.img<{ grid: boolean }>`
  border-radius: 50%;
  margin-left: ${(props) => (props.grid ? 0 : "-2rem")};
  margin-top: ${(props) => (props.grid ? "3rem" : 0)};
  @media (max-width: 500px) {
    margin-top: ${(props) => (props.grid ? "1rem" : 0)};
  }
  @media (max-width: 380px) {
    margin-left: ${(props) => (props.grid ? 0 : "-1.5rem")};
    transform: scale(1);
  }
`;

export const City = styled.p<{ grid: boolean }>`
  margin: 0;
  font-family: "Poppins";
  font-weight: 600;
  font-size: clamp(0.75rem, 2vw, 1rem);
  color: #7f7f7f;
  opacity: 0.7;
`;

export const NameAndCity = styled.span`
  display: flex;
  flex: 4;
  min-width: 8rem;
  flex-direction: column;
`;

export const Icons = styled.span<{ grid: boolean }>`
  display: flex;
  flex: ${(props) => (props.grid ? "0 1" : "1")};
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.grid ? "center" : "flex-end")};
  padding: 0 4%;
  gap: 0.5rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  font-size: 2rem;
  @media (max-width: 700px) {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
