import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  min-width: 100px;
  height: 30rem;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  svg {
    position: absolute;
  }
`;

export const InformationHolder = styled.div`
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
`;

export const Name = styled.h3`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Picture = styled.img`
  border-radius: 50%;
`;

export const City = styled.p`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1rem;
  color: #7f7f7f;
  opacity: 0.7;
`;

export const Icons = styled.span`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.div`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
`;
