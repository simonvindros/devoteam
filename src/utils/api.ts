import { useEffect, useState } from "react";
import { People } from "../models";

export const useGetPeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<People>([]);
  const [getMorePeople, setGetMorePeople] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setGetMorePeople(false);

    fetch(`https://randomuser.me/api/?results=50`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          setPeople((prev) => {
            return [...prev, ...data.results];
          });
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [getMorePeople]);

  return { loading, people, setGetMorePeople };
};
