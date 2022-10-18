import React, { FC, useEffect, useState } from "react";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";
import { BsGrid, BsList, BsSearch } from "react-icons/bs";
import {
  DesktopWrapper,
  IconButton,
  IconContainer,
  InputContainer,
  MobileWrapper,
} from "./styled";
import { Input } from "../../atoms/Input/input";
import { useWindowResize } from "../../utils/hooks";

type Props = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  ascOrder: boolean;
  setAscOrder: React.Dispatch<React.SetStateAction<boolean>>;
  grid: boolean;
  setGrid: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filter: FC<Props> = ({
  setSearchInput,
  ascOrder,
  setAscOrder,
  grid,
  setGrid,
}) => {
  const { width, height } = useWindowResize();
  const [isMobile, setIsMobile] = useState<boolean>();
  useEffect(() => {
    setIsMobile(width < height);
  }, [width, height]);

  return !isMobile ? (
    <DesktopWrapper>
      <InputContainer>
        <IconButton onClick={() => setAscOrder(!ascOrder)}>
          {ascOrder ? (
            <AiOutlineSortAscending size={"1.5rem"} />
          ) : (
            <AiOutlineSortDescending size={"1.5rem"} />
          )}
        </IconButton>
        <Input
          icon={<BsSearch />}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
      </InputContainer>
      <IconButton onClick={() => setGrid(!grid)}>
        {grid ? <BsGrid size={"1.5rem"} /> : <BsList size={"1.5rem"} />}
      </IconButton>
    </DesktopWrapper>
  ) : (
    <MobileWrapper>
      <Input
        icon={<BsSearch />}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <IconContainer>
        <IconButton onClick={() => setAscOrder(!ascOrder)}>
          {ascOrder ? (
            <AiOutlineSortAscending size={"1.5rem"} />
          ) : (
            <AiOutlineSortDescending size={"1.5rem"} />
          )}
        </IconButton>
        <IconButton onClick={() => setGrid(!grid)}>
          {grid ? <BsGrid size={"1.5rem"} /> : <BsList size={"1.5rem"} />}
        </IconButton>
      </IconContainer>
    </MobileWrapper>
  );
};
