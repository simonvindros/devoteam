import "./App.css";
import { useCallback, useRef, useState } from "react";
import { useGetPeople } from "./utils/api";
import { RandomPeople } from "./components/RandomPeople/randomPeople";
import { Filter } from "./components/Filter/filter";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#ebe9e4",
      }}
    >
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
        loading={loading}
        grid={grid}
      />
      {loading && <div>LOADING...</div>}
    </div>
  );
}

export default App;
