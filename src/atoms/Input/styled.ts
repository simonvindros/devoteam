import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;

export const Icon = styled.div`
  transform: translateX(48%);
  position: absolute;
`;

export const InputField = styled.input`
  -webkit-appearance: none;
  display: flex;
  flex: 1;
  height: 1.5rem;
  width: 100%;
  padding: 0.125rem 0.25rem;
  border: none;
  border-radius: 1rem;
  background-color: white;
  text-indent: 2rem;
  transition: all 0.3s;
  :focus-visible {
    outline: none;
  }
  :hover {
    box-shadow: 0 0.075rem 0.5rem 0.25rem rgba(0, 0, 0, 0.25);
  }
`;
