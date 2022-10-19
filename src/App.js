import { AppWrapper } from "./styled";
import { useCallback, useRef, useState } from "react";
import { useGetPeople } from "./utils/api";
import { RandomPeople } from "./components/RandomPeople/randomPeople";
import { Filter } from "./components/Filter/filter";
import { Header } from "./components/Header/header";

function App() {
  const { people, loading, setGetMorePeople } = useGetPeople();
  const [searchInput, setSearchInput] = useState("");
  const [ascOrder, setAscOrder] = useState(true);
  const [grid, setGrid] = useState(true);

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
    <AppWrapper>
      <Header />
      <Filter
        setSearchInput={setSearchInput}
        ascOrder={ascOrder}
        setAscOrder={setAscOrder}
        grid={grid}
        setGrid={setGrid}
      />
      <RandomPeople
        people={people}
        searchInput={searchInput}
        ascOrder={ascOrder}
        lastPersonRef={lastPersonRef}
        grid={grid}
      />
      {loading && <div>LOADING...</div>}
    </AppWrapper>
  );
}

export default App;
