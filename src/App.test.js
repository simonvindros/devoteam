import React from "react";
import { useGetPeople } from "./utils/api";
import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";

import App from "./App";
import { render } from "@testing-library/react";
import { RandomPeople } from "./molecules/RandomPeople/randomPeople";

// const server = setupServer(
//   rest.get("/api", (req, res, ctx) => {
//     return res(ctx.json({ people: useMockedPeople }));
//   })
// );

// const useMockedPeople = [
//   {
//     gender: "female",
//     name: { title: "Ms", first: "Marina", last: "Stojković" },
//     location: {
//       street: { number: 447, name: "Petra Markovića" },
//       city: "Bač",
//       state: "Rasina",
//       country: "Serbia",
//       postcode: 70150,
//       coordinates: { latitude: "58.1674", longitude: "14.1319" },
//       timezone: {
//         offset: "-5:00",
//         description: "Eastern Time (US & Canada), Bogota, Lima",
//       },
//     },
//     email: "marina.stojkovic@example.com",
//     login: {
//       uuid: "7cd40a0b-ab3f-434b-96bb-cb68a449429b",
//       username: "sadrabbit757",
//       password: "qazwsxed",
//       salt: "Qm9osS1z",
//       md5: "79741c0496af5df42e61ae264d20a910",
//       sha1: "c79ac7df4894eda06a55785725d9ceb9f67645fb",
//       sha256:
//         "c51564f7013be37e2342072877a9987a4bfa8b0114c5d8df4d848b9086fc5ed3",
//     },
//     dob: { date: "1969-02-22T03:41:34.332Z", age: 53 },
//     registered: { date: "2012-08-13T08:40:02.400Z", age: 10 },
//     phone: "012-5316-740",
//     cell: "067-0631-252",
//     id: { name: "SID", value: "802649953" },
//     picture: {
//       large: "https://randomuser.me/api/portraits/women/62.jpg",
//       medium: "https://randomuser.me/api/portraits/med/women/62.jpg",
//       thumbnail: "https://randomuser.me/api/portraits/thumb/women/62.jpg",
//     },
//     nat: "RS",
//   },
// ];

describe("App", () => {
  it("should render cards when positive api response", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGetPeople());
    await waitForNextUpdate();
    await act(async () =>
      render(<RandomPeople people={result.current.people} searchInput="" />)
    );
    expect(
      screen.getByText(result.current.people[0].name.first)
    ).toBeInTheDocument();
  });
});
