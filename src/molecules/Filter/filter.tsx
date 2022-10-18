import React, { FC, useState } from "react";

type Props = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setAscOrder: React.Dispatch<React.SetStateAction<boolean>>;
  ascOrder: boolean;
};

export const Filter: FC<Props> = ({
  setSearchInput,
  setAscOrder,
  ascOrder,
}) => {
  return (
    <>
      <input
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <button onClick={() => setAscOrder(!ascOrder)}>asc / desc order</button>
    </>
  );
};
