import React from "react";
import { FC } from "react";
import { Wrapper, Icon, InputField } from "./styled";

type Props = {
  icon: React.ReactNode;
  onChange: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
};

export const Input: FC<Props> = ({ icon, onChange }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <InputField onChange={onChange} />
    </Wrapper>
  );
};
