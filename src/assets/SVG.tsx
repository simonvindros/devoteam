import React, { FC } from "react";

type Props = {
  color: string;
};

export const SVG: FC<Props> = ({ color }) => {
  return (
    <svg viewBox="0 0 2000 4000" xmlns="http://www.w3.org/2000/svg">
      <path
        d="
        M 0 0 L 2000 0 L 2000 4000 C 2000 2000 2000 2000 1000 2000 C 0 2000 0 2000 0 0 Z"
        strokeWidth={0}
        stroke="#ffffff"
        fill={color}
      />
    </svg>
  );
};
