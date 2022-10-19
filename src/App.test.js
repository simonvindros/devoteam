import React from "react";
import { useGetPeople } from "./utils/api";
import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

import { render } from "@testing-library/react";
import { RandomPerson } from "./components/RandomPeople/RandomPerson/randomPerson";

describe("App", () => {
  it("should render cards when positive api response", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPeople());
    await waitForNextUpdate();
    await act(async () =>
      render(
        <RandomPerson
          firstName={result.current.people[0].name.first}
          lastName={result.current.people[0].name.last}
          picture={result.current.people[0].picture.medium}
          city={result.current.people[0].location.city}
          grid={true}
        />
      )
    );
    expect(
      screen.getByText(result.current.people[0].location.city)
    ).toBeInTheDocument();
  });
});
