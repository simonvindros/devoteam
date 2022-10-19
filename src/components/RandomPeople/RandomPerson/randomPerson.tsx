import React, { FC } from "react";
import { SVG } from "../../../assets/SVG";
import {
  Card,
  City,
  Icon,
  Icons,
  InformationHolder,
  Name,
  Picture,
} from "./styled";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

type Props = {
  firstName: string;
  lastName: string;
  picture: string;
  city: string;
};

const backgroundColors = ["#a7b8a8", "#e3d5c9", "#e7cdab"];

export const RandomPerson: FC<Props> = ({
  firstName,
  lastName,
  picture,
  city,
}) => {
  return (
    <Card>
      <SVG
        color={
          backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
        }
      />
      <InformationHolder>
        <Name>
          {firstName} {lastName}
        </Name>
        <Picture src={picture} />
        <City>{city}</City>
        <Icons>
          <Icon>
            <AiOutlineMail size={"2rem"} />
          </Icon>
          <Icon>
            <BiPhoneCall size={"2rem"} />
          </Icon>
        </Icons>
      </InformationHolder>
    </Card>
  );
};
