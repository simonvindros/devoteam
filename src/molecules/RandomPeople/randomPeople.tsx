import React, { FC } from "react";
import { People, Person } from "../../models";

type Props = {
  people: People;
  searchInput: string;
  lastPersonRef: React.LegacyRef<HTMLDivElement>;
  ascOrder: boolean;
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
}) => {
  const peopleCards = orderPeople(people, searchInput, ascOrder);
  return (
    <>
      {peopleCards.map((person, i) => {
        if (people.length === i + 1) {
          return (
            <div key={person.login.uuid} ref={lastPersonRef}>
              {person.name.first}
            </div>
          );
        }
        return <div key={person.login.uuid}>{person.name.first}</div>;
      })}
    </>
  );
};
