import "./App.css";
import { useCallback, useRef, useState } from "react";
import { useGetPeople } from "./molecules/utils/api";
import { RandomPeople } from "./molecules/RandomPeople/randomPeople";
import { Filter } from "./molecules/Filter/filter";

function App() {
  const { people, loading, setGetMorePeople } = useGetPeople();
  const [searchInput, setSearchInput] = useState("");
  const [ascOrder, setAscOrder] = useState(true);

  const observer = useRef();

  const lastPersonRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setGetMorePeople(true);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <>
      <Filter
        setSearchInput={setSearchInput}
        setAscOrder={setAscOrder}
        ascOrder={ascOrder}
      />
      <RandomPeople
        people={people}
        searchInput={searchInput}
        ascOrder={ascOrder}
        lastPersonRef={lastPersonRef}
      />
      {loading && <div>LOADING...</div>}
    </>
  );
}

export default App;
