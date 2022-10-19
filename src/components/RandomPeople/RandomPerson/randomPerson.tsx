import React, { FC, useState } from "react";
import { SVG } from "../../../assets/SVG";
import {
  City,
  GridCard,
  GridInformationContainer,
  Icon,
  Icons,
  InformationWrapper,
  ListCard,
  ListInformationContainer,
  Name,
  NameAndCity,
  Picture,
  WhiteBackgroundDiv,
} from "./styled";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  firstName: string;
  lastName: string;
  picture: string;
  city: string;
  grid: boolean;
};

const backgroundColors = ["#a7b8a8", "#e3d5c9", "#e7cdab"];

const randomBackgroundColor = () =>
  backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

export const RandomPerson: FC<Props> = ({
  firstName,
  lastName,
  picture,
  city,
  grid,
}) => {
  const [backgroundColor] = useState(randomBackgroundColor());

  return grid ? (
    <GridCard>
      <SVG color={backgroundColor} />
      <GridInformationContainer>
        <Name grid={grid}>
          {firstName} {lastName}
        </Name>
        <Picture src={picture} grid={grid} />
        <City grid={grid}>{city}</City>
        <Icons grid={grid}>
          <Icon>
            <AiOutlineMail />
          </Icon>
          <Icon>
            <BiPhoneCall />
          </Icon>
        </Icons>
      </GridInformationContainer>
    </GridCard>
  ) : (
    <ListCard backgroundColor={backgroundColor}>
      <WhiteBackgroundDiv />
      <ListInformationContainer>
        <Picture src={picture} grid={grid} />
        <InformationWrapper>
          <NameAndCity>
            <Name grid={grid}>
              {firstName} {lastName}
            </Name>
            <City grid={grid}>{city}</City>
          </NameAndCity>
          <Icons grid={grid}>
            <Icon>
              <AiOutlineMail />
            </Icon>
            <Icon>
              <BiPhoneCall />
            </Icon>
          </Icons>
        </InformationWrapper>
      </ListInformationContainer>
    </ListCard>
  );
};
