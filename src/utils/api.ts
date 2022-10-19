import { useEffect, useState } from "react";
import { People } from "../models";

export const useGetPeople = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState<People>([]);
  const [getMorePeople, setGetMorePeople] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setGetMorePeople(false);
    setError(false);

    fetch(`https://randomuser.me/api/?results=50`)
      .then((res) => res.json())
      .then((data) => {
        if (!isCancelled) {
          if (
            data.results !== null ||
            data.results !== undefined ||
            data.results.length !== 0
          ) {
            setPeople((prev) => {
              return [...prev, ...data.results];
            });
            setLoading(false);
          } else {
            setError(true);
          }
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });

    return () => {
      isCancelled = true;
    };
  }, [getMorePeople]);

  return { loading, people, setGetMorePeople, error };
};
