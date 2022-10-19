import { useCallback, useRef, useState } from "react";
import { Grid } from "react-loader-spinner";
import { useGetPeople } from "./utils/api";
import { RandomPeople } from "./components/RandomPeople/randomPeople";
import { Filter } from "./components/Filter/filter";
import { Header } from "./components/Header/header";
import { AppWrapper, ComponentWrapper, ErrorText } from "./styled";

function App() {
  const { people, loading, setGetMorePeople, error } = useGetPeople();
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
      {error && (
        <ComponentWrapper>
          <ErrorText>Error occured when retrieving the Team</ErrorText>
        </ComponentWrapper>
      )}
      <RandomPeople
        people={people}
        searchInput={searchInput}
        ascOrder={ascOrder}
        lastPersonRef={lastPersonRef}
        grid={grid}
      />
      {loading && (
        <ComponentWrapper>
          <Grid color={"#e3d5c9"} height={200} width={200} />
        </ComponentWrapper>
      )}
    </AppWrapper>
  );
}

export default App;
