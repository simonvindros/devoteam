import styled from "styled-components";

export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 60rem;
  justify-content: space-between;
  align-items: center;
`;

export const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  gap: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  gap: 1rem;
`;

export const IconButton = styled.button`
  -webkit-appearance: none;
  display: block;
  border: none;
  padding: 0.25rem;
  background-color: transparent;
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 0.075rem 0.5rem 0.25rem rgba(0, 0, 0, 0.25);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
