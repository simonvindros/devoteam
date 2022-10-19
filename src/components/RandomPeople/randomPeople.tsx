import React, { FC } from "react";
import { Wrapper } from "./styled";
import { People } from "../../models";
import { RandomPerson } from "./RandomPerson/randomPerson";

type Props = {
  people: People;
  searchInput: string;
  lastPersonRef: React.LegacyRef<HTMLDivElement>;
  ascOrder: boolean;
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
  grid,
}) => {
  const peopleCards = orderPeople(people, searchInput, ascOrder);

  return (
    <Wrapper grid={grid}>
      {peopleCards.map((person, i) => {
        if (people.length === i + 1) {
          return (
            <div key={person.login.uuid} ref={lastPersonRef}>
              <RandomPerson
                firstName={person.name.first}
                lastName={person.name.last}
                picture={grid ? person.picture.large : person.picture.medium}
                city={person.location.city}
                grid={grid}
              />
            </div>
          );
        }
        return (
          <RandomPerson
            key={person.login.uuid}
            firstName={person.name.first}
            lastName={person.name.last}
            picture={grid ? person.picture.large : person.picture.medium}
            city={person.location.city}
            grid={grid}
          />
        );
      })}
    </Wrapper>
  );
};
