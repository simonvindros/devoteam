import React, { FC } from "react";
import { Card, Wrapper } from "./styled";
import { People } from "../../models";

type Props = {
  people: People;
  searchInput: string;
  lastPersonRef: React.LegacyRef<HTMLDivElement>;
  ascOrder: boolean;
  loading: boolean;
  grid: boolean;
};

const orderPeople = (people: People, searchInput: string, order: boolean) =>
  people
    .filter((person) =>
      person.name.first.toUpperCase().includes(searchInput.toUpperCase())
    )
    .sort((a, b) => {
      const isReversed = order ? 1 : -1;
      return isReversed * a.name.first.localeCompare(b.name.first);
    });

export const RandomPeople: FC<Props> = ({
  people,
  searchInput,
  lastPersonRef,
  ascOrder,
  loading,
  grid,
}) => {
  const peopleCards = orderPeople(people, searchInput, ascOrder);

  return (
    <Wrapper grid={grid}>
      {peopleCards.map((person, i) => {
        if (people.length === i + 1) {
          return (
            <div ref={lastPersonRef}>
              <Card key={person.login.uuid}>{person.name.first}</Card>
            </div>
          );
        }
        return <Card key={person.login.uuid}>{person.name.first}</Card>;
      })}
    </Wrapper>
  );
};